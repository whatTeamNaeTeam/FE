'use client'

import React from 'react'
import AuthFormInput from '@/_components/AuthFormInput'
import {
  REGISTER_FIELD_NAMES,
  UserRegisterFormValueType,
} from './SignupContainer'
import { Control, useController } from 'react-hook-form'
import Button from '@/_components/ui/Button'

interface EmailInputProps {
  control: Control<UserRegisterFormValueType>
  handleGetEmailValid: (email: string) => void
  isValidChecked: boolean
}

const EmailInput = ({
  control,
  handleGetEmailValid,
  isValidChecked,
}: EmailInputProps) => {
  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/

  const {
    field,
    fieldState: { error },
  } = useController<UserRegisterFormValueType>({
    name: REGISTER_FIELD_NAMES.email,
    control,
  })

  return (
    <>
      <label
        htmlFor={REGISTER_FIELD_NAMES.email}
        className="inline-block text-sm mb-2 font-bold"
      >
        이메일 *
      </label>
      <div className="flex items-center gap-2">
        <AuthFormInput
          type="email"
          id={REGISTER_FIELD_NAMES.email}
          field={field}
          placeholder="이메일주소(아이디 찾기에 사용됩니다.)"
          disabled={isValidChecked}
        />
        <Button
          type="button"
          size={'sm'}
          disabled={!emailRegex.test(field.value) || isValidChecked}
          onClick={() => handleGetEmailValid(field.value)}
          className="w-16"
        >
          인증
        </Button>
      </div>
      {error && <p className="text-red-8 text-sm">{`${error.message}`}</p>}
    </>
  )
}

export default EmailInput
