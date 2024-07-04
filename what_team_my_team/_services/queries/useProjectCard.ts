import axiosInstance from '@/_lib/axios'
import { Project, ProjectCamel } from '@/_types/project'
import { convertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

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
  const projectCardQuery = useQuery<
    ProjectCardReturn,
    AxiosError,
    ProjectCardCamel
  >({
    queryFn: () => getProjectCard(userId, keyword),
    queryKey: [PROJECT_CARD_KEY, keyword],
    select: (data) => {
      const selectedData = convertSnakeToCamel(data) as ProjectCardCamel

      return selectedData
    },
  })

  return projectCardQuery
}

export default useProjectCard
