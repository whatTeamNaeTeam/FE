import { IS_LEADER_KEY } from '@/_constants/queryKey'
import { checkLeaderApi } from '@/_services/project'
import {
  CheckLeaderApiReturn,
  ConvertedCheckLeaderApiReturn,
} from '@/_services/type'
import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export function useCheckLeader({ teamId }: { teamId: string }) {
  const checkLeaderQuery = useQuery<
    CheckLeaderApiReturn,
    AxiosError,
    ConvertedCheckLeaderApiReturn
  >({
    queryKey: [IS_LEADER_KEY, teamId],
    queryFn: () => checkLeaderApi({ teamId }),
    select: (data) => {
      const convertedData = convertSnakeToCamel(data)

      return convertedData
    },
  })

  return checkLeaderQuery
}
