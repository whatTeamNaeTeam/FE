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
  image: string
  category: Category[]
  leader_info: LeaderInfo
  like: number
  version: number
  view: number
  genre: string
  is_like: boolean
}
export type LeaderInfo = {
  id: number
  name: string
}

export type CategoryCamel = ConvertSnakeToCamel<Category>
export type ProjectCamel = ConvertSnakeToCamel<Project>
export type LeaderInfoCamel = ConvertSnakeToCamel<LeaderInfo>

export type ProjectResponse = {
  next: string
  previous: string
  results: Project[]
}
