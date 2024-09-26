import axiosInstance from '@/_lib/axios'
import { CustomErrorResponse, HttpError } from '@/_types/error'
import axios from 'axios'

export async function getUserProfile({ userId }: { userId: string | number }) {
  try {
    const response = await axiosInstance.get(`/user/profile/${userId}`)

    return response.data
  } catch (error) {
    if (axios.isAxiosError<CustomErrorResponse>(error) && error.response) {
      const httpStatus = error.response.status
      const { code } = error.response.data

      throw new HttpError(httpStatus, code)
    }
  }
}

export async function updateProfileApi({
  userId,
  formData,
}: {
  userId: string | number
  formData: FormData
}) {
  const response = await axiosInstance.patch(
    `/user/profile/${userId}`,
    formData,
  )

  return response.data
}
