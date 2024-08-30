import { updateProfileApi } from '@/_services/profile'
import { useMutation } from '@tanstack/react-query'

export function useUpdateProfile() {
  const updateProfileMutation = useMutation({ mutationFn: updateProfileApi })

  return updateProfileMutation
}
