import { ConvertedUser } from '@/_types/auth'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

const userStorage = createJSONStorage<ConvertedUser | null>(
  () => sessionStorage,
)

export const userState = atomWithStorage<ConvertedUser | null>(
  'userState',
  null,
  userStorage,
)
