import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

const deleteTeamApi = async (teamIds: string) => {
  const body = { ids: teamIds.toString() }

  const response = await axiosInstance.delete(`/admin/team/list`, {
    data: body,
  })

  return response.data
}

const useDeleteTeam = () => {
  const deleteTeamMutation = useMutation<
    { detail: string },
    AxiosError,
    string
  >({ mutationFn: deleteTeamApi })

  return deleteTeamMutation
}

export default useDeleteTeam
