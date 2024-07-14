import axios from 'axios'

const baseURL =
  process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
    ? process.env.NEXT_PUBLIC_MOCK_BASE_URL
    : process.env.NEXT_PUBLIC_BASE_URL

const axiosInstance = axios.create({
  baseURL,
})

const getNewAccessToken = async () => {
  try {
    const response = await axiosInstance.post('/auth/token/refresh')

    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers['X-from'] = 'web'
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
  async function (error) {
    if (error.config.url === '/auth/token/refresh') {
      return Promise.reject(error)
    }

    if (error.response.status === 401 || error.response.status === 403) {
      try {
        await getNewAccessToken()

        const originalRequest = error.config

        return await axiosInstance(originalRequest)
      } catch (oError) {
        throw oError
      }
    }

    return Promise.reject(error)
  },
)

export default axiosInstance
