import { getProjectDetailApi } from '@/_services/project'
import {
  ConvertedGetProjectDetailReturn,
  GetProjectDetailReturn,
} from '@/_services/type'
import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export const PROJECT_DETAIL_KEY = 'project-detail'

export function useProjectDetail({ teamId }: { teamId: string }) {
  const projectDetailQuery = useQuery<
    GetProjectDetailReturn,
    AxiosError,
    ConvertedGetProjectDetailReturn
  >({
    queryFn: () => getProjectDetailApi({ teamId }),
    queryKey: [PROJECT_DETAIL_KEY, teamId],
    select: (data) => {
      const convertedData = convertSnakeToCamel(data)

      return convertedData
    },
  })

  return projectDetailQuery
}
