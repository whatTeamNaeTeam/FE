import { deleteTeamApi } from '@/_services/project'
import { useMutation } from '@tanstack/react-query'

export const useDeleteTeam = () => {
  const deleteTeamWithLeaderMutation = useMutation({
    mutationFn: deleteTeamApi,
  })

  return deleteTeamWithLeaderMutation
}
