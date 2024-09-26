'use client'

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import SignupModal from '@/_components/SignupModal'
import Button from '@/_components/ui/Button'
import ValidCodeInput from './ValidCodeInput'
import NameInput from './NameInput'
import StudentNumInput from './StudentNumInput'
import EmailInput from './EmailInput'
import ValidTimer from './ValidTimer'
import PositionInput from './PositionInput'
import { useSignup } from '@/_hook/mutations/auth/useSignup'
import { useGetEmailCode } from '@/_hook/mutations/auth/useGetEmailCode'
import { useCheckEmailCode } from '@/_hook/mutations/auth/useCheckEmailCode'

export type UserRegisterFormValueType = {
  [K in keyof typeof REGISTER_FIELD_NAMES]: string
}

export const REGISTER_FIELD_NAMES = {
  studentNum: 'studentNum',
  name: 'name',
  position: 'position',
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

  const { control, handleSubmit, watch } = useForm<UserRegisterFormValueType>()
  const signupMutation = useSignup()
  const getEmailCodeQuery = useGetEmailCode()
  const checkEmailCodeQuery = useCheckEmailCode()

  const handleGetEmailValid = (email: string) => {
    getEmailCodeQuery.mutate(
      { email },
      {
        onSuccess: () => {
          alert('입력하신 이메일로 인증코드가 발급되었습니다.')
          setCanValid(true)
          setIsValidTimer(true)
          setValidTimer(300)
        },
      },
    )
  }

  const handleValid = (code: string) => {
    checkEmailCodeQuery.mutate(
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
    })
  }

  return (
    <div className="flex flex-col items-center justify-center border mt-[120px]">
      <form
        className="flex flex-col w-full p-12"
        onSubmit={handleSubmit(handleSignup)}
      >
        <div className="flex flex-col gap-1">
          <NameInput control={control} />
          <StudentNumInput control={control} />
          <PositionInput control={control} />
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
