import { useMutation } from '@tanstack/react-query'
import axiosInstance from '@/_lib/axios'
import { AxiosError } from 'axios'

interface SocialLoginVariablesType {
  code: string
}
export interface SocialLoginApiResponse {
  isRegistered: boolean
}

const socialLoginApi = (data: string) => {
  const response = axiosInstance
    .post<SocialLoginApiResponse>('/auth/github/login', {
      code: data,
    })
    .then(({ data }) => data)

  return response
}

const useSocialLogin = () => {
  const { mutate } = useMutation<
    SocialLoginApiResponse,
    AxiosError,
    SocialLoginVariablesType
  >({
    mutationFn: ({ code }: SocialLoginVariablesType) => socialLoginApi(code),
  })

  return { mutate }
}

export default useSocialLogin
