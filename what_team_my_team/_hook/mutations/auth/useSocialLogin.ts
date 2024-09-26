import { socialLoginApi } from '@/_services/auth'
import { SocialLoginApiReturn } from '@/_services/type'
import { userState } from '@/_stores/atoms/user'
import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useSetAtom } from 'jotai'

export function useSocialLogin() {
  const setUserState = useSetAtom(userState)

  const { mutate } = useMutation<SocialLoginApiReturn, AxiosError, string>({
    mutationFn: socialLoginApi,
    onSuccess: (data) => {
      setUserState(convertSnakeToCamel(data).user)
    },
  })

  return { mutate }
}

export default useSocialLogin
