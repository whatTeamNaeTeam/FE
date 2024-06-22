import axiosInstance from '@/_lib/axios'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

interface SignupResponse {
  user: {
    name: string
    student_num: string
    id: number
    image: string
  }
}
interface SignupVariables {
  studentNum: string
  name: string
  email: string
  validCode: string
}

const signup = (data: SignupVariables) => {
  const body = {
    student_num: data.studentNum,
    name: data.name,
    email: data.email,
    code: data.validCode,
  }

  const response = axiosInstance
    .post<SignupResponse>('/auth/github/finish', body)
    .then(({ data }) => data)

  return response
}

const useSignup = () => {
  const signupMutation = useMutation<
    SignupResponse,
    AxiosError,
    SignupVariables
  >({
    mutationFn: signup,
  })

  return { signupMutation }
}

export default useSignup
