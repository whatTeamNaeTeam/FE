import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'

const teamRejectApi = async (userId: number) => {
  const body = {
    ids: userId.toLocaleString(),
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
