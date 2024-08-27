import axiosInstance from '@/_lib/axios'
import {
  convertSnakeToCamel,
  ConvertSnakeToCamel,
} from '@/_utils/convertSnakeToCamel'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export interface MyTeamDetailResponse {
  title: string
  leader_info: {
    name: string
    student_num: string
    id: number
    image_url: string
    position: string
    category: string
  }
  members_info: Member[]
  member_count: number
  team_id: number
}

export type Member = {
  name: string
  student_num: string
  id: number
  image_url: string
  position: string
  category: string
}

const getMyTeamDetailApi = async ({ teamId }: { teamId: string }) => {
  const response = await axiosInstance.get(
    `/user/profile/team-manage/detail/${teamId}`,
  )

  return response.data
}

export const MANAGE_MY_TEAM_DETAIL_KEY = 'team-manage-detail'

const useMyTeamDetail = ({ teamId }: { teamId: string }) => {
  const myTeamDetailQuery = useQuery<
    MyTeamDetailResponse,
    AxiosError,
    ConvertSnakeToCamel<MyTeamDetailResponse>
  >({
    queryFn: () => getMyTeamDetailApi({ teamId }),
    queryKey: [MANAGE_MY_TEAM_DETAIL_KEY, teamId],
    select: (data) => {
      return convertSnakeToCamel(data)
    },
  })

  return myTeamDetailQuery
}

export default useMyTeamDetail
