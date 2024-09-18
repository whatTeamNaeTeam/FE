import {
  CustomError,
  DuplicatedError,
  ErrorCode,
  HttpError,
  NotFoundError,
} from './../_types/error'
import axiosInstance from '@/_lib/axios'
import { CustomErrorResponse } from '@/_types/error'
import axios from 'axios'

export async function getMainPageProjectListApi({
  pageParam = null,
  keyword,
}: {
  pageParam: string | null
  keyword: string
}) {
  const response = await axiosInstance.get(
    pageParam || `/team/list?keyword=${keyword}`,
  )

  return response.data
}

export async function getActivePageProjectListApi({
  userId,
  keyword,
}: {
  userId: string
  keyword: 'inprogress' | 'accomplished' | 'apply'
}) {
  const response = await axiosInstance.get(
    `/user/profile/activity/${userId}?keyword=${keyword}`,
  )

  return response.data
}

export async function getProjectDetailApi({ teamId }: { teamId: string }) {
  try {
    const response = await axiosInstance.get(`/team/detail/${teamId}`)

    return response.data
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError<CustomErrorResponse>(error) && error.response) {
      if (error.response) {
        const httpStatus = error.response.status
        const { code } = error.response.data

        if (code === ErrorCode.TEAM_NOT_FOUND) {
          throw new NotFoundError(httpStatus, code)
        }

        throw new HttpError(httpStatus, code)
      } else {
        throw new CustomError('9999')
      }
    }
  }
}

export async function applyProjectApi({
  categoryId,
  content,
}: {
  categoryId: number
  content: string
}) {
  try {
    const body = {
      bio: content,
    }

    const response = await axiosInstance.post(`/apply/${categoryId}`, body)

    return response.data
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError<CustomErrorResponse>(error) && error.response) {
      if (error.response) {
        const httpStatus = error.response.status
        const { code } = error.response.data

        if (code === ErrorCode.DUPLICATED_POSITION_APPLY) {
          throw new DuplicatedError(httpStatus, code)
        }

        throw new HttpError(httpStatus, code)
      } else {
        throw new CustomError('9999')
      }
    }
  }
}
