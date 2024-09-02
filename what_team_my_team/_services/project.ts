import axiosInstance from '@/_lib/axios'

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

export const getProjectDetailApi = async ({ teamId }: { teamId: string }) => {
  const response = await axiosInstance.get(`/team/detail/${teamId}`)

  return response.data
}
