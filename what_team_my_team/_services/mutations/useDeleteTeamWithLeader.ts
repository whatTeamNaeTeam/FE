import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'

export const deleteTeamWithLeaderApi = async ({
  teamId,
}: {
  teamId: string
}) => {
  const response = await axiosInstance.delete(
    `/user/profile/team-manage/${teamId}`,
  )

  return response.data
}

export const useDeleteTeamWithLeader = () => {
  const deleteTeamWithLeaderMutation = useMutation({
    mutationFn: deleteTeamWithLeaderApi,
  })

  return deleteTeamWithLeaderMutation
}
