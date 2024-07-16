import axiosInstance from '@/_lib/axios'
import {
  convertSnakeToCamel,
  ConvertSnakeToCamel,
} from '@/_utils/convertSnakeToCamel'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export interface UserProfileReturn {
  profile: {
    name: string
    student_num: string
    id: number
    image_url: string
    is_approved: boolean
    is_staff: boolean
    position: string
    explain: string
  }
  urls: Url[] | null
  tech: { name: string }[] | null
  is_owner: boolean
}
export type Url = { url: string }
export type UserProfileCamel = ConvertSnakeToCamel<UserProfileReturn>

export const getUserProfile = async (userId: string) => {
  const response = await axiosInstance.get(`/user/profile/${userId}`)

  return response.data
}

export const USER_PROFILE_KEY = 'profile'

const useUserProfile = (userId: string) => {
  const userProfileQuery = useQuery<
    UserProfileReturn,
    AxiosError,
    UserProfileCamel
  >({
    queryFn: () => getUserProfile(userId),
    queryKey: [USER_PROFILE_KEY, userId],
    select: (data) => {
      const convertedData = convertSnakeToCamel(data)

      return convertedData
    },
  })
  return userProfileQuery
}

export default useUserProfile
