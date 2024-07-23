import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

const teamAcceptApi = async (id: number) => {
  const body = {
    ids: id.toLocaleString(),
  }

  const response = await axiosInstance.patch(`/admin/team/manage`, body)

  return response.data
}

const useTeamAccept = () => {
  const teamAcceptMutation = useMutation<any, AxiosError, number>({
    mutationFn: teamAcceptApi,
  })

  return teamAcceptMutation
}

export default useTeamAccept
