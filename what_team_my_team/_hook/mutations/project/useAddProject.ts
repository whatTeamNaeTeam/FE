import { addProjectApi } from '@/_services/project'
import { useMutation } from '@tanstack/react-query'

export function useAddProject() {
  const addProjectMutation = useMutation({ mutationFn: addProjectApi })

  return addProjectMutation
}
