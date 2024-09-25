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
  genre: string
  is_like: boolean
  is_approved: boolean
}
export interface ProjectDetail extends Omit<Project, 'image_url'> {
  explain: string
  image_url: string[]
  urls: string[]
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
export interface Member {
  name: string
  student_num: string
  id: number
  image_url: string
  position: string
  category: string
}
export interface User {
  id: number
  image_url: string
  name: string
  student_num: string
}

export type ConvertedProject = ConvertSnakeToCamel<Project>
export type ConvertedProjectDetail = ConvertSnakeToCamel<ProjectDetail>
export type ConvertedCategory = ConvertSnakeToCamel<Category>
export type ConvertedMember = ConvertSnakeToCamel<Member>
export type ConvertedUser = ConvertSnakeToCamel<User>
