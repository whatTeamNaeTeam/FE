'use client'

import React, { useEffect } from 'react'
import useGetSearchParam from '@/_hook/useGetSearchParam'
import useSocialLogin from '@/_hook/mutations/auth/useSocialLogin'
import { SocialLoginApiReturn } from '@/_services/type'

const Callback = () => {
  const codeParam = useGetSearchParam('code')
  const { mutate } = useSocialLogin()

  const handleSuccess = (response: SocialLoginApiReturn) => {
    if (response.registered) {
      window.location.href = '/'
    } else {
      window.location.href = '/signup'
    }
  }

  useEffect(() => {
    if (codeParam) {
      mutate(codeParam, {
        onSuccess: handleSuccess,
      })

      return
    }
  }, [])

  return <></>
}

export default Callback
