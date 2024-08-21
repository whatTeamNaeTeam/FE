import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'

const banMemberFromProject = async ({
  teamId,
  userId,
}: {
  teamId: string
  userId: number
}) => {
  const body = {
    ban_user: userId,
  }

  const response = await axiosInstance.delete(
    `/user/profile/team-manage/detail/${teamId}`,
    { data: body },
  )

  return response.data
}

export const useBanMemberFromProject = () => {
  const mutation = useMutation({ mutationFn: banMemberFromProject })

  return mutation
}
