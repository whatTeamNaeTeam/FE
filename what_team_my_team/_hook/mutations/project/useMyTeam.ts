import { MANAGE_MY_TEAM_KEY } from '@/_constants/queryKey'
import { getMyTeamApi } from '@/_services/project'
import { ConvertedGetMyTeamReturn, getMyTeamReturn } from '@/_services/type'
import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { useQuery } from '@tanstack/react-query'

export function useMyTeam({ userId }: { userId: string }) {
  const myTeamQuery = useQuery<
    getMyTeamReturn,
    Error,
    ConvertedGetMyTeamReturn
  >({
    queryFn: () => getMyTeamApi({ userId }),
    queryKey: [...MANAGE_MY_TEAM_KEY, userId],
    select: (data) => {
      const convertedData = convertSnakeToCamel(data)

      return convertedData
    },
  })

  return myTeamQuery
}
