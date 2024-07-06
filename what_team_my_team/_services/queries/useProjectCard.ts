import axiosInstance from '@/_lib/axios'
import { LikeCamel, Project, ProjectCamel } from '@/_types/project'
import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { LIKE_STATE_KEY } from '../mutations/useLikeState'

export interface ProjectCardReturn {
  team: Project[]
  is_owner: boolean
}
export interface ProjectCardCamel {
  team: ProjectCamel[]
  isOwner: boolean
}

/**
 * @param userId
 * @param keyword inprogress 진행 프로젝트 accomplished 완료 프로젝트 apply 가입 신청한 프로젝트
 * @returns
 */
const getProjectCard = (
  userId: string,
  keyword: 'inprogress' | 'accomplished' | 'apply',
) => {
  const response = axiosInstance
    .get(`/user/profile/activity/${userId}?keyword=${keyword}`)
    .then(({ data }) => data)

  return response
}

export const PROJECT_CARD_KEY = 'project-card'

const useProjectCard = (
  userId: string,
  keyword: 'inprogress' | 'accomplished' | 'apply',
) => {
  const queryClient = useQueryClient()

  const convertAndCacheData = (data: ProjectCardReturn) => {
    const camelData = convertSnakeToCamel(data) as ProjectCardCamel

    // Dev Tools에 변환된 데이터 반영
    queryClient.setQueryData([PROJECT_CARD_KEY, keyword], camelData)

    // 최초 좋아요 상태 캐시에 저장
    camelData.team.forEach((team) => {
      const likeData: LikeCamel = {
        isLike: team.isLike,
        version: team.version,
        like: team.like,
      }

      queryClient.setQueryData([LIKE_STATE_KEY, team.id], likeData)
    })

    return camelData
  }

  const projectCardQuery = useQuery<
    ProjectCardReturn,
    AxiosError,
    ProjectCardCamel
  >({
    queryFn: () => getProjectCard(userId, keyword),
    queryKey: [PROJECT_CARD_KEY, keyword],
    select: convertAndCacheData,
  })

  return projectCardQuery
}

export default useProjectCard
