import { ConvertSnakeToCamel } from '@/_utils/convertSnakeToCamel'

export interface Project {
  id: number
  title: string
  image_url: string
  category: Category[]
  leader_info: Leader
  like: number
  version: number
  view: number
  is_like: boolean
  is_approved: boolean
}

export interface Category {
  id: number
  tech: string
  need_num: number
  current_num: number
}
export interface Leader {
  id: number
  name: string
  image_url: string
}

export interface Like {
  like: number
  isLike: boolean
  version: number
}

export type ConvertedProject = ConvertSnakeToCamel<Project>
export type ConvertedCategory = ConvertSnakeToCamel<Category>
