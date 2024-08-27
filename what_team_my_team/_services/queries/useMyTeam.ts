import axiosInstance from '@/_lib/axios'
import {
  convertSnakeToCamel,
  ConvertSnakeToCamel,
} from '@/_utils/convertSnakeToCamel'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export type Team = {
  id: number
  title: string
  member_count: number
  leader_info: {
    name: string
    id: number
    image_url: string
    is_leader: boolean
  }
}
export type TeamCamel = ConvertSnakeToCamel<Team>

const getManageTeamApi = async ({ userId }: { userId: string }) => {
  const response = await axiosInstance.get(
    `/user/profile/team-manage/${userId}`,
  )

  return response.data
}

const MANAGE_MY_TEAM_KEY = 'team-manage'

const useMyTeam = ({ userId }: { userId: string }) => {
  const query = useQuery<
    { team: Team[] },
    AxiosError,
    ConvertSnakeToCamel<{ team: Team[] }>
  >({
    queryFn: () => getManageTeamApi({ userId }),
    queryKey: [MANAGE_MY_TEAM_KEY, userId],
    select: (data) => {
      const camelData = convertSnakeToCamel(data)

      return camelData
    },
  })

  return query
}

export default useMyTeam
