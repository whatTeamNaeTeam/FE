import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

const teamAcceptApi = async (userIds: string) => {
  const body = {
    ids: userIds,
  }

  const response = await axiosInstance.patch(`/admin/team/manage`, body)

  return response.data
}

const useTeamAccept = () => {
  const teamAcceptMutation = useMutation<any, AxiosError, string>({
    mutationFn: teamAcceptApi,
  })

  return teamAcceptMutation
}

export default useTeamAccept
