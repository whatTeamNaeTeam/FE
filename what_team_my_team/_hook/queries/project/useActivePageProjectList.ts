import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { LIKE_STATE_KEY } from '@/_hook/mutations/like/useUpdateLike'
import {
  ConvertedGetActivePageProjectListReturn,
  GetActivePageProjectListReturn,
} from '@/_services/type'
import { getActivePageProjectListApi } from '@/_services/project'
import { Like } from '@/_types/project'

export const PROJECT_CARD_KEY = 'project-card'

export function useActivePageProjectList({
  userId,
  keyword,
}: {
  userId: string
  keyword: 'inprogress' | 'accomplished' | 'apply'
}) {
  const queryClient = useQueryClient()

  const setLikeDataToQuery = (
    data: ConvertedGetActivePageProjectListReturn['team'],
  ) => {
    data.forEach((team) => {
      const likeData: Like = {
        isLike: team.isLike,
        version: team.version,
        like: team.like,
      }

      queryClient.setQueryData([LIKE_STATE_KEY, team.id], likeData)
    })
  }
  // Dev Tools에 변환된 데이터 반영
  // queryClient.setQueryData([PROJECT_CARD_KEY, keyword], camelData)

  const activePageProjectListQuery = useQuery<
    GetActivePageProjectListReturn,
    AxiosError,
    ConvertedGetActivePageProjectListReturn
  >({
    queryFn: () => getActivePageProjectListApi({ userId, keyword }),
    queryKey: [PROJECT_CARD_KEY, keyword],
    select: (data) => {
      const convertedData = convertSnakeToCamel(data)

      setLikeDataToQuery(convertedData.team)

      return convertedData
    },
  })

  return activePageProjectListQuery
}
