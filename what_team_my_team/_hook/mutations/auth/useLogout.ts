import { logoutApi } from '@/_services/auth'
import { userState } from '@/_stores/atoms/user'
import { useMutation } from '@tanstack/react-query'
import { useSetAtom } from 'jotai'

export function useLogout() {
  const setUserState = useSetAtom(userState)

  const logoutMutation = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      setUserState(null)
    },
  })

  return logoutMutation
}
