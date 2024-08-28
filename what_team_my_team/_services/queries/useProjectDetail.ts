import axiosInstance from '@/_lib/axios'
import {
  convertSnakeToCamel,
  ConvertSnakeToCamel,
} from '@/_utils/convertSnakeToCamel'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export interface ProjectDetailReturn {
  team: {
    id: number
    leader_info: {
      name: string
      id: number
      image_url: string
    }
    title: string
    explain: string
    genre: string
    like: number
    version: number
    image_url: string
    view: number
    category: Category[]
    urls: string[]
  }
  is_leader: boolean
  is_like: boolean
}

export type Category = {
  id: number
  tech: string
  need_num: number
  current_num: number
}

export const ProjectDetailApi = async (teamId: string) => {
  const response = await axiosInstance.get(`/team/detail/${teamId}`)

  console.log(response.data)
  return response.data
}

export const PROJECT_DETAIL_KEY = 'project-detail'

export const useProjectDetail = ({ teamId }: { teamId: string }) => {
  const projectDetailQuery = useQuery<
    ProjectDetailReturn,
    AxiosError,
    ConvertSnakeToCamel<ProjectDetailReturn>
  >({
    queryFn: () => ProjectDetailApi(teamId),
    queryKey: [PROJECT_DETAIL_KEY, teamId],
    select: (data) => {
      const convertedData = convertSnakeToCamel(data)

      return convertedData
    },
  })

  return projectDetailQuery
}
