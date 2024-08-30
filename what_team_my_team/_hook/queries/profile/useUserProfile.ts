import {
  GetUserProfileReturn,
  ConvertedGetUserProfileReturn,
} from '@/_services/type'
import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { getUserProfile } from '@/_services/profile'

export const USER_PROFILE_KEY = 'profile'

export function useUserProfile({ userId }: { userId: number | string }) {
  const userProfileQuery = useQuery<
    GetUserProfileReturn,
    AxiosError,
    ConvertedGetUserProfileReturn
  >({
    queryFn: () => getUserProfile({ userId }),
    queryKey: [USER_PROFILE_KEY, userId],
    select: (data) => {
      const convertedData = convertSnakeToCamel(data)

      return convertedData
    },
  })
  return userProfileQuery
}
