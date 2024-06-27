export type Category = {
  id: number
  tech: string
  need_num: number
  current_num: number
}
export type SelectedCategory = {
  id: string
  tech: string
  needNum: number
  currentNum: number
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
export type SelectedProject = {
  id: string
  title: string
  image: string
  category: SelectedCategory[]
  leaderInfo: SelectedLeaderInfo
  like: number
  version: number
  view: number
  genre: string
  isLike: boolean
}

export type LeaderInfo = {
  id: number
  name: string
}
export type SelectedLeaderInfo = {
  id: string
  name: string
}

export type ProjectResponse = {
  next: string
  previous: string
  results: Project[]
}
