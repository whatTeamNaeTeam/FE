import { PROJECT_DETAIL_KEY } from '@/_constants/queryKey'
import { getProjectDetailApi } from '@/_services/project'
import {
  ConvertedGetProjectDetailReturn,
  GetProjectDetailReturn,
} from '@/_services/type'
import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export function useProjectDetail({ teamId }: { teamId: string }) {
  const projectDetailQuery = useQuery<
    GetProjectDetailReturn,
    AxiosError,
    ConvertedGetProjectDetailReturn
  >({
    queryFn: () => getProjectDetailApi({ teamId }),
    queryKey: [...PROJECT_DETAIL_KEY, teamId],
    select: (data) => {
      const convertedData = convertSnakeToCamel(data)

      return convertedData
    },
  })

  return projectDetailQuery
}
