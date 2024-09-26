import { MANAGE_MY_TEAM_DETAIL_KEY } from '@/_constants/queryKey'
import { getMyTeamDetailApi } from '@/_services/project'
import {
  ConvertedMyTeamDetailReturn,
  MyTeamDetailReturn,
} from '@/_services/type'
import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { useQuery } from '@tanstack/react-query'

export function useMyTeamDetail({ teamId }: { teamId: string }) {
  const myTeamDetailQuery = useQuery<
    MyTeamDetailReturn,
    Error,
    ConvertedMyTeamDetailReturn
  >({
    queryFn: () => getMyTeamDetailApi({ teamId }),
    queryKey: [...MANAGE_MY_TEAM_DETAIL_KEY, teamId],
    select: (data) => {
      return convertSnakeToCamel(data)
    },
  })

  return myTeamDetailQuery
}
