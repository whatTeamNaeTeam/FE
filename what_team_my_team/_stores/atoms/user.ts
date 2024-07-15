import { UserCamel } from '@/_services/mutations/useSocialLogin'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

const userStorage = createJSONStorage<UserCamel | null>(() => sessionStorage)
const isLoggedInStorage = createJSONStorage<boolean>(() => sessionStorage)

export const userState = atomWithStorage<UserCamel | null>(
  'userState',
  null,
  userStorage,
)

export const isLoggedInState = atomWithStorage(
  'isLoggedInState',
  false,
  isLoggedInStorage,
)
