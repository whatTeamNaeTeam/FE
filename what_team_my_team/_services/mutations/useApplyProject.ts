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
  projectId: string
  content: string
}

const applyProject = (data: ApplyProjectVariables) => {
  const { content, projectId } = data
  const body = {
    bio: content,
  }

  const response = axiosInstance
    .post(`/team/apply/${projectId}`, body)
    .then(({ data }) => data)

  return response
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
