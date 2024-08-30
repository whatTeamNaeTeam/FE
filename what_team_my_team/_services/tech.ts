import axiosInstance from '@/_lib/axios'

export async function updateTechApi({
  userId,
  techs,
}: {
  userId: string | number
  techs: string
}) {
  const body = {
    tech: techs,
  }

  const response = await axiosInstance.post(
    `/user/profile/tech/${userId}`,
    body,
  )

  return response.data
}
