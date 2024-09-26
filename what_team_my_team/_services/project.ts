import { ErrorCode } from '@/_constants/error'
import {
  CustomError,
  DuplicatedError,
  HttpError,
  LimitExceededError,
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
  try {
    const response = await axiosInstance.get(
      pageParam || `/team/list?keyword=${keyword}`,
    )

    return response.data
  } catch (error) {
    if (axios.isAxiosError<CustomErrorResponse>(error) && error.response) {
      if (error.response) {
        const httpStatus = error.response.status
        const { code } = error.response.data

        throw new HttpError(httpStatus, code)
      } else {
        throw new CustomError('9999')
      }
    }
  }
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
    if (axios.isAxiosError<CustomErrorResponse>(error) && error.response) {
      if (error.response) {
        const httpStatus = error.response.status
        const { code } = error.response.data

        if (code === ErrorCode.POSITION_IS_FULL) {
          throw new LimitExceededError(httpStatus, code)
        }
        if (code === ErrorCode.POSITION_APPLY_IS_DUPLICATED) {
          throw new DuplicatedError(httpStatus, code)
        }

        throw new HttpError(httpStatus, code)
      } else {
        throw new CustomError('9999')
      }
    }
  }
}

export async function checkLeaderApi({ teamId }: { teamId: string }) {
  const response = await axiosInstance.get(`/team/check-leader/${teamId}`)

  return response.data
}

export async function addProjectApi(data: FormData) {
  const response = await axiosInstance.post('/team/create', data)

  return response.data
}

export async function acceptMemberApi({ requestId }: { requestId: number }) {
  const response = await axiosInstance.patch(`/apply/${requestId}`)

  return response.data
}

export async function rejectMemberApi({ requestId }: { requestId: number }) {
  const response = await axiosInstance.delete(`/apply/${requestId}`)

  return response.data
}

export async function exportMemberApi({
  teamId,
  userId,
}: {
  teamId: string
  userId: number
}) {
  const body = {
    ban_user: userId,
  }

  const response = await axiosInstance.delete(
    `/user/profile/team-manage/detail/${teamId}`,
    { data: body },
  )

  return response.data
}

export async function deleteTeamApi({ teamId }: { teamId: string }) {
  const response = await axiosInstance.delete(
    `/user/profile/team-manage/${teamId}`,
  )

  return response.data
}

export async function leaveTeamApi({ teamId }: { teamId: string }) {
  const response = await axiosInstance.patch(
    `/user/profile/team-manage/${teamId}`,
  )

  return response.data
}

export async function getMyTeamApi({ userId }: { userId: string }) {
  const response = await axiosInstance.get(
    `/user/profile/team-manage/${userId}`,
  )

  return response.data
}

export async function getMyTeamDetailApi({ teamId }: { teamId: string }) {
  const response = await axiosInstance.get(
    `/user/profile/team-manage/detail/${teamId}`,
  )

  return response.data
}

export async function getNotApprovedMemberApi({ teamId }: { teamId: string }) {
  const response = await axiosInstance.get(`/apply/${teamId}`)

  return response.data
}
