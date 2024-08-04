import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'

const teamRejectApi = async (userIds: string) => {
  const body = {
    ids: userIds,
  }

  const response = await axiosInstance.delete(`/admin/team/manage`, {
    data: body,
  })

  return response.data
}

const useTeamReject = () => {
  const teamRejectMutation = useMutation({ mutationFn: teamRejectApi })

  return teamRejectMutation
}

export default useTeamReject
