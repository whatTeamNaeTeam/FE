import { Project, ProjectDetail, User } from '@/_types/type'
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

export interface ApplyProjectReturn {
  id: number
  team_id: number
  user_id: number
  created_at: string
  bio: string
  tech: string
}

export interface CheckLeaderApiReturn {
  is_leader: boolean
}
export type ConvertedCheckLeaderApiReturn =
  ConvertSnakeToCamel<CheckLeaderApiReturn>

export interface SocialLoginApiReturn {
  registered: boolean
  user: {
    id: number
    image_url: string
    name: string
    student_num: string
  }
}
export type ConvertedSocialLoginApiReturn =
  ConvertSnakeToCamel<SocialLoginApiReturn>

export interface getUserReturn {
  user: User
}
export type ConvertedGetUserReturn = ConvertSnakeToCamel<getUserReturn>

export interface getMyTeamReturn {
  team: {
    id: number
    title: string
    member_count: number
    leader_info: {
      name: string
      id: number
      image_url: string
      is_leader: boolean
    }
  }[]
}
export type ConvertedGetMyTeamReturn = ConvertSnakeToCamel<getMyTeamReturn>

export interface MyTeamDetailReturn {
  title: string
  leader_info: {
    name: string
    student_num: string
    id: number
    image_url: string
    position: string
    category: string
  }
  members_info: {
    name: string
    student_num: string
    id: number
    image_url: string
    position: string
    category: string
  }[]
  member_count: number
  team_id: number
}
export type ConvertedMyTeamDetailReturn =
  ConvertSnakeToCamel<MyTeamDetailReturn>

export interface GetNotApprovedMemberReturn {
  id: number
  team_id: number
  created_at: string
  bio: string
  tech: string
  user_info: {
    id: number
    name: string
    image_url: string
    position: string
  }
}
export type ConvertedGetNotApprovedMemberReturn =
  ConvertSnakeToCamel<GetNotApprovedMemberReturn>
