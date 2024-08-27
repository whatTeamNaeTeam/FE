import axiosInstance from '@/_lib/axios'
import {
  ConvertSnakeToCamel,
  convertSnakeToCamel,
} from '@/_utils/convertSnakeToCamel'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export interface CheckLeaderApiResponse {
  is_leader: boolean
}

export const checkLeaderApi = async ({ teamId }: { teamId: string }) => {
  const response = await axiosInstance.get(`/team/check-leader/${teamId}`)

  return response.data
}

const IS_LEADER_KEY = 'is-leader'

export const useCheckLeader = ({ teamId }: { teamId: string }) => {
  const query = useQuery<
    CheckLeaderApiResponse,
    AxiosError,
    ConvertSnakeToCamel<CheckLeaderApiResponse>
  >({
    queryKey: [IS_LEADER_KEY, teamId],
    queryFn: () => checkLeaderApi({ teamId }),
    select: (data) => {
      const convertedData = convertSnakeToCamel(data)

      return convertedData
    },
  })

  return query
}
