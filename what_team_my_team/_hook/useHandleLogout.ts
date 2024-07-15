import useLogout from '@/_services/queries/useLogout'
import { isLoggedInState, userState } from '@/_stores/atoms/user'
import { useSetAtom } from 'jotai'

const useHandleLogout = () => {
  const setUserState = useSetAtom(userState)
  const setIsLoggedIn = useSetAtom(isLoggedInState)
  const { mutate, isSuccess } = useLogout()

  const handleLogout = () => {
    mutate()
    if (isSuccess) {
      setUserState(null)
      setIsLoggedIn(false)
    }
  }

  return { handleLogout }
}

export default useHandleLogout
