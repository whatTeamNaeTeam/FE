import axiosInstance from '@/_lib/axios'
import { CustomError, CustomErrorResponse } from '@/_types/error'

export async function logoutApi() {
  const response = await axiosInstance.post('/auth/logout')

  return response
}

export async function socialLoginApi(code: string) {
  try {
    const response = await axiosInstance.post('/auth/github/login', {
      code,
    })

    return response.data
  } catch (error) {
    throw new CustomError('9999')
  }
}

export async function getUserApi() {
  try {
    const response = await axiosInstance.get(`/auth/get-user`)

    console.log(response.data)

    return response.data
  } catch (error) {
    console.log(error)
  }
}
