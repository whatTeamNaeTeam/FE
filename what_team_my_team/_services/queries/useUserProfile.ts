import axiosInstance from '@/_lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

interface UserProfileReturn {
  profile: {
    name: string
    student_num: string
    id: number
    image: string
    is_approved: boolean
    is_staff: boolean
    position: string
    explain: string
  }
  urls: { url: string }[]
  tech: { name: string }[]
  is_owner: boolean
}
export interface SelectedUserProfile {
  profile: {
    name: string
    studentNum: string
    id: number
    image: string
    isApproved: boolean
    isStaff: boolean
    position: string
    explain: string
  }
  urls: { url: string }[]
  tech: { name: string }[]
  isOwner: boolean
}

export const getUserProfile = (userId: string) => {
  const response = axiosInstance
    .get(`/user/profile/${userId}`)
    .then(({ data }) => {
      return data
    })

  return response
}

export const USER_PROFILE_KEY = 'profile'

const useUserProfile = (userId: string) => {
  const userProfileQuery = useQuery<
    UserProfileReturn,
    AxiosError,
    SelectedUserProfile
  >({
    queryFn: () => getUserProfile(userId),
    queryKey: [USER_PROFILE_KEY, userId],
    select: (data) => {
      const selectedUrls = data.urls.map((url) => url)
      const selectedTechs = data.tech.map((tech) => tech)
      const selectedData: SelectedUserProfile = {
        profile: {
          name: data.profile.name,
          studentNum: data.profile.student_num,
          id: data.profile.id,
          image: data.profile.image,
          isApproved: data.profile.is_approved,
          isStaff: data.profile.is_staff,
          position: data.profile.position,
          explain: data.profile.explain,
        },
        urls: selectedUrls,
        tech: selectedTechs,
        isOwner: data.is_owner,
      }

      return selectedData
    },
  })
  return userProfileQuery
}

export default useUserProfile
