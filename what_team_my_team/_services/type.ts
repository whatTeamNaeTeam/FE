import { Project, ProjectDetail } from '@/_types/project'
import { ConvertSnakeToCamel } from './../_utils/convertSnakeToCamel'

export interface GetUserProfileReturn {
  profile: {
    name: string
    student_num: string
    id: number
    image_url: string
    is_approved: boolean
    is_staff: boolean
    position: string
    explain: string
  }
  url: { url: string }[]
  tech: { name: string }[] | []
  is_owner: boolean
}
export type ConvertedGetUserProfileReturn =
  ConvertSnakeToCamel<GetUserProfileReturn>

export interface GetMainPageProjectListReturn {
  next: string | null
  previous: string | null
  results: Project[]
}
export type ConvertedGetMainPageProjectReturn =
  ConvertSnakeToCamel<GetMainPageProjectListReturn>

export interface UpdateLikeReturn {
  like: {
    is_like: boolean
    like_count: number
  }
  version: number
}
export type ConvertedUpdateLikeReturn = ConvertSnakeToCamel<UpdateLikeReturn>

export interface GetActivePageProjectListReturn {
  team: Project[]
  is_owner: boolean
}
export type ConvertedGetActivePageProjectListReturn =
  ConvertSnakeToCamel<GetActivePageProjectListReturn>

export interface GetProjectDetailReturn {
  team: ProjectDetail
  is_leader: boolean
}
export type ConvertedGetProjectDetailReturn =
  ConvertSnakeToCamel<GetProjectDetailReturn>
