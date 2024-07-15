import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'
import { isLoggedInState, userState } from '@/_stores/atoms/user'
import { useSetAtom } from 'jotai'

const logoutApi = async () => {
  const response = await axiosInstance.delete('/auth/logout')

  return response
}

const useLogout = () => {
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

export default useLogout
