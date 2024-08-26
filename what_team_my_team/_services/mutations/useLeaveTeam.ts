import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'

export const leaveTeamApi = async ({ teamId }: { teamId: string }) => {
  const response = await axiosInstance.patch(
    `/user/profile/team-manage/${teamId}`,
  )

  return response.data
}

export const useLeaveTeam = () => {
  const leaveTeamMutation = useMutation({ mutationFn: leaveTeamApi })

  return leaveTeamMutation
}
