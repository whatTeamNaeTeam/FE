import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

type Email = string
interface CheckCodeVariables {
  email: Email
  code: string
}

const getEmailCode = (email: string) => {
  const body = {
    email,
  }

  const response = axiosInstance
    .post('/auth/email', body)
    .then(({ data }) => data)

  return response
}

const checkEmailCode = (email: string, code: string) => {
  const body = {
    email,
    code,
  }

  const response = axiosInstance
    .patch('/auth/email', body)
    .then(({ data }) => data)

  return response
}

const useEmailCode = () => {
  const getCodeMutation = useMutation<unknown, AxiosError, { email: Email }>({
    mutationFn: ({ email }) => getEmailCode(email),
  })

  const checkCodeMutation = useMutation<
    unknown,
    AxiosError,
    CheckCodeVariables
  >({
    mutationFn: ({ email, code }) => checkEmailCode(email, code),
  })

  return { getCodeMutation, checkCodeMutation }
}

export default useEmailCode
