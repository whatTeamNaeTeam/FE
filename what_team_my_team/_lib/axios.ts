import { AuthError, CustomErrorResponse } from '@/_types/error'
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean
}

export const baseURL =
  process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
    ? process.env.NEXT_PUBLIC_MOCK_BASE_URL
    : process.env.NEXT_PUBLIC_BASE_URL

const axiosInstance = axios.create({
  baseURL,
})

function isRefreshRequest(url: string | undefined) {
  return url === '/auth/token/refresh'
}

async function getNewAccessToken() {
  try {
    const response = await axiosInstance.post('/auth/token/refresh')

    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers['X-from'] = 'web'
    config.headers['X-admin'] = false
    config.headers['X-debug'] = true
    config.withCredentials = true

    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error: AxiosError) {
    const originalRequest: CustomAxiosRequestConfig | undefined = error.config

    if (
      error.response?.status === 401 &&
      !isRefreshRequest(originalRequest?.url) &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true
      try {
        await getNewAccessToken()

        try {
          return await axiosInstance(originalRequest)
        } catch (newRequestError) {
          return Promise.reject(newRequestError)
        }
      } catch (refreshTokenError) {
        if (
          axios.isAxiosError<CustomErrorResponse>(refreshTokenError) &&
          (refreshTokenError.response?.status === 403 ||
            refreshTokenError.response?.status === 401)
        ) {
          const httpStatus = refreshTokenError.response.status
          const code = refreshTokenError.response.data.code
          sessionStorage.clear()

          throw new AuthError(httpStatus, code)
        }
      }
    }

    return Promise.reject(error)
  },
)

export default axiosInstance
