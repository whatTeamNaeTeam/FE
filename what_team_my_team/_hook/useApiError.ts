import { isTokenExpiredError } from '@/_lib/error'
import { CustomErrorResponse } from '@/_types/error'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export function useApiError() {
  const router = useRouter()
  const handleError = (error: Error) => {
    console.log('played')
    if (!axios.isAxiosError<CustomErrorResponse>(error)) {
      throw Error
    }
    if (!error.response) {
      // 네트워크 에러 구현
      throw Error
    }
    const { code } = error.response.data
    const httpStatus = error.response.status
    console.log(httpStatus)
    if (isTokenExpiredError(httpStatus)) {
      // toast 혹은 confirm dialog 추가 예정
      alert('로그인이 만료되었습니다. 로그인 페이지로 이동합니다.')
      router.push('/signin')
      return
    }
  }

  return { handleError }
}
