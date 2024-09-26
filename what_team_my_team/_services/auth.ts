import axiosInstance from '@/_lib/axios'
import { CustomError } from '@/_types/error'

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

export async function getEmailCodeApi({ email }: { email: string }) {
  const body = {
    email,
  }

  const response = await axiosInstance.post('/auth/email', body)

  return response.data
}

export async function checkEmailCodeApi({
  email,
  code,
}: {
  email: string
  code: string
}) {
  const body = {
    email,
    code,
  }

  const response = await axiosInstance.patch('/auth/email', body)

  return response.data
}

interface SignupResponse {
  user: {
    name: string
    student_num: string
    id: number
    image: string
  }
}

export async function signupApi({
  studentNum,
  name,
  position,
  email,
  validCode,
}: {
  studentNum: string
  name: string
  position: string
  email: string
  validCode: string
}) {
  const body = {
    student_num: studentNum,
    name,
    email,
    position,
    code: validCode,
  }

  const response = await axiosInstance.post('/auth/github/finish', body)

  return response.data
}
