'use client'

import React, { useEffect } from 'react'
import useGetSearchParam from '@/_hook/useGetSearchParam'
import useSocialLogin, {
  SocialLoginApiResponse,
} from '@/_services/mutations/useSocialLogin'
import { useRouter } from 'next/navigation'
import { AxiosError } from 'axios'

const Callback = () => {
  const router = useRouter()
  const codeParam = useGetSearchParam('code')
  const { mutate } = useSocialLogin()

  const handleSuccess = (response: SocialLoginApiResponse) => {
    if (response.registered) {
      router.push('/')
    } else {
      router.push('/signup')
    }
  }
  const handleError = (error: AxiosError) => {
    console.log(error)
  }

  useEffect(() => {
    if (codeParam) {
      mutate(
        { code: codeParam },
        {
          onSuccess: handleSuccess,
          onError: handleError,
        },
      )
    }
  }, [])
  return <></>
}

export default Callback
