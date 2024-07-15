import { User } from '@/_services/mutations/useSocialLogin'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

const storage = createJSONStorage(() => sessionStorage)
export const userState = atomWithStorage('userState', null, storage)

export const isLoggedInState = atomWithStorage(
  'isLoggedInState',
  false,
  storage,
)
