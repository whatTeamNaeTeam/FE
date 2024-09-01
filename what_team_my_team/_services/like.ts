import axiosInstance from '@/_lib/axios'

export async function updateLikeApi({
  projectId,
  version,
}: {
  projectId: number | string
  version: number
}) {
  const body = {
    version,
  }

  const response = await axiosInstance.post(`/like/${projectId}`, body)

  return response.data
}
