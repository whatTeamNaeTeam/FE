import { leaveTeamApi } from '@/_services/project'
import { useMutation } from '@tanstack/react-query'

export function useLeaveTeam() {
  const leaveTeamMutation = useMutation({ mutationFn: leaveTeamApi })

  return leaveTeamMutation
}
