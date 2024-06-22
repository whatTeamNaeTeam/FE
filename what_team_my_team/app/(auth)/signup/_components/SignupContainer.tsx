'use client'

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import useSignup from '@/_services/mutations/useSignup'
import SignupModal from '@/_components/SignupModal'
import Button from '@/_components/ui/Button'
import useEmailCode from '@/_services/mutations/useEmailAccess'
import ValidCodeInput from './ValidCodeInput'
import NameInput from './NameInput'
import StudentNumInput from './StudentNumInput'
import EmailInput from './EmailInput'
import ValidTimer from './ValidTimer'
import { useRouter } from 'next/navigation'

export type UserRegisterFormValueType = {
  [K in keyof typeof REGISTER_FIELD_NAMES]: string
}

export const REGISTER_FIELD_NAMES = {
  studentNum: 'studentNum',
  name: 'name',
  email: 'email',
  validCode: 'validCode',
} as const

const SignupContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [canValid, setCanValid] = useState<boolean>(false)
  const [isValidChecked, setIsValidChecked] = useState<boolean>(false)
  const [isValidTimer, setIsValidTimer] = useState<boolean>(false)
  const [validTimer, setValidTimer] = useState<number | null>(null)
  const [isValidError, setIsValidError] = useState<boolean>(false)
  const [validErrorMessage, setValidErrorMessage] = useState<string>('')

  const router = useRouter()
  const { control, handleSubmit, watch } = useForm<UserRegisterFormValueType>()
  const { signupMutation } = useSignup()

  const { getCodeMutation, checkCodeMutation } = useEmailCode()

  const handleGetEmailValid = (email: string) => {
    getCodeMutation.mutate(
      { email },
      {
        onSuccess: () => {
          alert('입력하신 이메일로 인증코드가 발급되었습니다.')
          setCanValid(true)
          setIsValidTimer(true)
          setValidTimer(300)
        },
        onError: (error) => {
          if (error.response?.status === 401) {
            alert('로그인이 만료되었습니다.')
            router.push('/signin')
          }
        },
      },
    )
  }

  const handleValid = (code: string) => {
    checkCodeMutation.mutate(
      { email: watch(REGISTER_FIELD_NAMES.email), code: code },
      {
        onSuccess: () => {
          setIsValidChecked(true)
          setIsValidTimer(false)
          setIsValidError(false)
        },
        onError: (error) => {
          // 상세 에러 분기 처리 필요
          setValidErrorMessage('코드가 일치하지 않습니다.')
          console.log(error)
        },
      },
    )
  }

  const handleSignup: SubmitHandler<UserRegisterFormValueType> = (data) => {
    signupMutation.mutate(data, {
      onSuccess: () => {
        setIsModalOpen(true)
      },
      onError: (error) => {
        console.log(error)
      },
    })
  }

  return (
    <div className="flex flex-col items-center justify-center border mt-[120px]">
      <form
        className="flex flex-col w-full p-12"
        onSubmit={handleSubmit(handleSignup)}
      >
        <div className="mb-2">
          <NameInput control={control} />
        </div>
        <div className="mb-2">
          <StudentNumInput control={control} />
        </div>
        <div className="mb-2">
          <EmailInput
            control={control}
            handleGetEmailValid={handleGetEmailValid}
            isValidChecked={isValidChecked}
          />
        </div>
        {canValid && (
          <div className="mb-2">
            <ValidCodeInput
              control={control}
              handleValid={handleValid}
              isValidChecked={isValidChecked}
            />
            {isValidError && <span>{validErrorMessage}</span>}
            {isValidTimer && (
              <ValidTimer timer={validTimer} setTimer={setValidTimer} />
            )}
          </div>
        )}
        <Button type="submit" disabled={!isValidChecked}>
          회원가입
        </Button>
      </form>
      {isModalOpen && (
        <SignupModal open={isModalOpen} setOpen={setIsModalOpen} />
      )}
    </div>
  )
}

export default SignupContainer
