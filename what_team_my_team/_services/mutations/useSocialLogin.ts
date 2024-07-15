import {
  ConvertSnakeToCamel,
  convertSnakeToCamel,
} from './../../_utils/convertSnakeToCamel'
import { useMutation } from '@tanstack/react-query'
import axiosInstance from '@/_lib/axios'
import { AxiosError } from 'axios'
import { useSetAtom } from 'jotai'
import { isLoggedInState, userState } from '@/_stores/atoms/user'

interface SocialLoginVariablesType {
  code: string
}
export interface User {
  id: number
  image_url: string
  name: string
  student_num: number
}
export type UserCamel = ConvertSnakeToCamel<User>
export interface SocialLoginApiResponse {
  registered: boolean
  user: User
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
  const setUserState = useSetAtom(userState)
  const setIsLoggedIn = useSetAtom(isLoggedInState)
  const { mutate } = useMutation<
    SocialLoginApiResponse,
    AxiosError,
    SocialLoginVariablesType
  >({
    mutationFn: ({ code }: SocialLoginVariablesType) => socialLoginApi(code),
    onSuccess: (data) => {
      const convertedData = convertSnakeToCamel(data)
      setIsLoggedIn(true)
      setUserState(convertedData.user)
    },
  })

  return { mutate }
}

export default useSocialLogin
