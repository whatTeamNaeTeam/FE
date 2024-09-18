import { logoutApi } from '@/_services/auth'
import { isLoggedInState, userState } from '@/_stores/atoms/user'
import { useMutation } from '@tanstack/react-query'
import { useSetAtom } from 'jotai'

export function useLogout() {
  const setUserState = useSetAtom(userState)
  const setIsLoggedIn = useSetAtom(isLoggedInState)
  const logoutMutation = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      setUserState(null)
      setIsLoggedIn(false)
    },
  })

  return logoutMutation
}
