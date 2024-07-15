import { ConvertSnakeToCamel } from '@/_utils/convertSnakeToCamel'

export type Category = {
  id: number
  tech: string
  need_num: number
  current_num: number
}
export type Project = {
  id: number
  title: string
  image_url: string
  category: Category[]
  leader_info: LeaderInfo
  view: number
  genre: string
} & Like
export type PageParam = {
  next: string
  previous: string
}
export type InfiniteProject = {
  results: Project[]
} & PageParam
export type LeaderInfo = {
  id: number
  name: string
}
export type Like = {
  like: number
  is_like: boolean
  version: number
}

export type CategoryCamel = ConvertSnakeToCamel<Category>
export type ProjectCamel = ConvertSnakeToCamel<Project>
export type InfiniteProjectCamel = ConvertSnakeToCamel<InfiniteProject>
export type LeaderInfoCamel = ConvertSnakeToCamel<LeaderInfo>
export type LikeCamel = ConvertSnakeToCamel<Like>

export type ProjectResponse = {
  next: string
  previous: string
  results: Project[]
}
