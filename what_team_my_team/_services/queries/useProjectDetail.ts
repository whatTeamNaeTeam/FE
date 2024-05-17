import axiosInstance from '@/_lib/axios'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export interface ProjectDetailReturn {
  team: {
    id: number
    leader_id: number
    name: string
    explain: string
    genre: string
    like: number
    version: number
    image: string
    leader_name: string
  }
  tech: {
    id: number
    tech: string
    need_num: number
    current_num: number
  }[]
  url: []
  is_leader: boolean
}
export interface SelectedProjectDetail {
  team: Team
  tech: Tech[]
  url: []
  isLeader: boolean
}
export interface Team {
  id: number
  leaderId: number
  name: string
  explain: string
  genre: string
  like: number
  version: number
  image: string
  leaderName: string
}
export interface Tech {
  id: number
  tech: string
  needNum: number
  currentNum: number
}

export const getProjectDetail = (teamId: string) => {
  const response = axiosInstance
    .get(`/team/detail/${teamId}`)
    .then(({ data }) => data)

  return response
}

export const PROJECT_DETAIL_KEY = 'project-detail'

const useProjectDetail = (teamId: string) => {
  const projectDetailQuery = useQuery<
    ProjectDetailReturn,
    AxiosError,
    SelectedProjectDetail
  >({
    queryFn: () => getProjectDetail(teamId),
    queryKey: [PROJECT_DETAIL_KEY, teamId],
    select: (data) => {
      const selectedTech: Tech[] = data.tech.map(
        ({ id, tech, need_num, current_num }) => {
          return {
            id: id,
            tech: tech,
            needNum: need_num,
            currentNum: current_num,
          }
        },
      )
      const selectedData: SelectedProjectDetail = {
        team: {
          id: data.team.id,
          leaderId: data.team.leader_id,
          name: data.team.name,
          explain: data.team.explain,
          genre: data.team.genre,
          like: data.team.like,
          version: data.team.version,
          image: data.team.image,
          leaderName: data.team.leader_name,
        },
        tech: selectedTech,
        url: [...data.url],
        isLeader: data.is_leader,
      }

      return selectedData
    },
  })

  return projectDetailQuery
}

export default useProjectDetail
