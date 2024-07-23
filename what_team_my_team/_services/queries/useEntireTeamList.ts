import axiosInstance from '@/_lib/axios'
import { getDate } from '@/_lib/day'
import { useQuery } from '@tanstack/react-query'
import { TeamAssign } from '@/_types/table'
import {
  ConvertSnakeToCamel,
  convertSnakeToCamel,
} from '@/_utils/convertSnakeToCamel'
import { AxiosError } from 'axios'

const ENTIRE_TEAM_KEY = 'entire-team'

interface ApiReturn {
  count: number
  next: string | null
  previous: string | null
  results: TeamAssign[]
}

const getEntireTeamApi = async ({
  pageNum,
}: {
  pageNum: number | undefined
}) => {
  const response = await axiosInstance.get(`/admin/team/list?page=${pageNum}`)

  return response.data
}

const useEntireTeamList = ({ pageNum }: { pageNum: number }) => {
  const entireTeamQuery = useQuery<
    ApiReturn,
    AxiosError,
    ConvertSnakeToCamel<ApiReturn>
  >({
    queryFn: () => getEntireTeamApi({ pageNum }),
    queryKey: [ENTIRE_TEAM_KEY, pageNum],
    select: (data) => {
      const convertedData = convertSnakeToCamel(data)

      const dateConvertedData = convertedData.results.map((item) => ({
        ...item,
        createdAt: getDate(item.createdAt),
      }))

      return {
        ...convertedData,
        results: [...dateConvertedData],
      }
    },
  })

  return entireTeamQuery
}

export default useEntireTeamList
