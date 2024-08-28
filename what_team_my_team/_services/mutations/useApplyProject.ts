import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

interface ApplyProjectResponse {
  id: number
  team_id: number
  user_id: number
  created_at: string
  bio: string
  tech: string
}
interface ApplyProjectVariables {
  categoryId: number
  content: string
}

const applyProject = async ({ categoryId, content }: ApplyProjectVariables) => {
  const body = {
    bio: content,
  }

  const response = await axiosInstance.post(`/apply/${categoryId}`, body)

  return response.data
}

const useApplyProject = () => {
  const applyProjectMutation = useMutation<
    ApplyProjectResponse,
    AxiosError,
    ApplyProjectVariables
  >({ mutationFn: applyProject })

  return applyProjectMutation
}

export default useApplyProject
