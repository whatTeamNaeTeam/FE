import { useMutation } from '@tanstack/react-query'
import axiosInstance from '@/_lib/axios'

const teamAdd = (data: FormData) => {
  const response = axiosInstance.post('team/create', data).then((data) => data)

  return response
}

const useTeamAdd = () => {
  const { mutate } = useMutation({ mutationFn: teamAdd })

  return { mutate }
}

export default useTeamAdd
