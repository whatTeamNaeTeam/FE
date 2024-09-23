import { exportMemberApi } from '@/_services/project'
import { useMutation } from '@tanstack/react-query'

export const useExportMember = () => {
  const exportMemberMutation = useMutation({ mutationFn: exportMemberApi })

  return exportMemberMutation
}
