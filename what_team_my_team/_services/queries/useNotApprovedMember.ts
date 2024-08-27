import axiosInstance from '@/_lib/axios'
import {
  convertSnakeToCamel,
  ConvertSnakeToCamel,
} from '@/_utils/convertSnakeToCamel'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export interface NotApprovedMemberReturn {
  id: number
  team_id: number
  created_at: string
  bio: string
  tech: string
  user_info: {
    id: number
    name: string
    image_url: string
    position: string
  }
}

export const notApprovedMemberApi = async ({ teamId }: { teamId: string }) => {
  const response = await axiosInstance.get(`/apply/${teamId}`)

  return response.data
}

export const NOT_APPROVED_MEMBER_KEY = 'not-approved-member'

export const useNotApprovedMember = ({ teamId }: { teamId: string }) => {
  const notApprovedMemberQuery = useQuery<
    NotApprovedMemberReturn[],
    AxiosError,
    ConvertSnakeToCamel<NotApprovedMemberReturn[]>
  >({
    queryFn: () => notApprovedMemberApi({ teamId }),
    queryKey: [NOT_APPROVED_MEMBER_KEY, teamId],
    select: (data) => {
      const convertedData = convertSnakeToCamel(data)

      return convertedData
    },
  })

  return notApprovedMemberQuery
}
