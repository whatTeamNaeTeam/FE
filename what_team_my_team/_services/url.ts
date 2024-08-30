import axiosInstance from '@/_lib/axios'

export async function updateUrlApi({
  userId,
  url,
}: {
  userId: number | string
  url: string
}) {
  const body = {
    url,
  }

  const response = await axiosInstance.post(`/user/profile/url/${userId}`, body)

  return response.data
}
