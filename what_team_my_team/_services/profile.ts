import axiosInstance from '@/_lib/axios'

export async function getUserProfile({ userId }: { userId: string | number }) {
  const response = await axiosInstance.get(`/user/profile/${userId}`)

  return response.data
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
