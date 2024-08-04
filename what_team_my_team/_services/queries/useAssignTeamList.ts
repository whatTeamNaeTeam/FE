import axiosInstance from '@/_lib/axios'
import { getDate } from '@/_lib/day'
import { TeamAssign, TeamAssignCamel } from '@/_types/table'
import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const ASSIGN_TEAM_LIST_KEY = 'assign-team'

const assignTeamListApi = async () => {
  const response = await axiosInstance.get(`/admin/team/manage`)

  return response.data
}

const useAssignTeamList = () => {
  const query = useQuery<TeamAssign[], AxiosError, TeamAssignCamel[]>({
    queryFn: assignTeamListApi,
    queryKey: [ASSIGN_TEAM_LIST_KEY],
    select: (data) => {
      const convertedData = convertSnakeToCamel(data)

      const dateConvertedData = convertedData.map((item) => {
        return {
          ...item,
          createdAt: getDate(item.createdAt),
        }
      })

      return dateConvertedData
    },
  })

  return query
}

export default useAssignTeamList
