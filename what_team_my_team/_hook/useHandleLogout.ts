import { userState } from '@/_stores/atoms/user'
import { useSetAtom } from 'jotai'
import { useLogout } from './mutations/auth/useLogout'

const useHandleLogout = () => {
  const setUserState = useSetAtom(userState)
  const { mutate, isSuccess } = useLogout()

  const handleLogout = () => {
    mutate()
    if (isSuccess) {
      setUserState(null)
    }
  }

  return { handleLogout }
}

export default useHandleLogout
