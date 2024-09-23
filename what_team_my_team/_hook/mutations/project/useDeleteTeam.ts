import { deleteTeamApi } from '@/_services/project'
import { useMutation } from '@tanstack/react-query'

export const useDeleteTeam = () => {
  const deleteTeamMutation = useMutation({
    mutationFn: deleteTeamApi,
  })

  return deleteTeamMutation
}
