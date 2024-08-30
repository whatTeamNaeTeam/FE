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
