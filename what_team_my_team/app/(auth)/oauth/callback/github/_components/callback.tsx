'use client'

import React, { useEffect } from 'react'
import useGetSearchParam from '@/_hook/useGetSearchParam'
import useSocialLogin, {
  SocialLoginApiResponse,
} from '@/_services/mutations/useSocialLogin'
import { AxiosError } from 'axios'

const Callback = () => {
  const codeParam = useGetSearchParam('code')
  const { mutate } = useSocialLogin()

  const handleSuccess = (response: SocialLoginApiResponse) => {
    if (response.registered) {
      window.location.href = '/'
    } else {
      window.location.href = '/signup'
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

      return
    }
  }, [])

  return <></>
}

export default Callback
