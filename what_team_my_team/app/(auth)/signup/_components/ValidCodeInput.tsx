'use client'

import React from 'react'
import AuthFormInput from '@/_components/AuthFormInput'
import Button from '@/_components/ui/Button'
import { Control, useController } from 'react-hook-form'
import {
  REGISTER_FIELD_NAMES,
  UserRegisterFormValueType,
} from './SignupContainer'
import { FaCheckCircle } from 'react-icons/fa'

interface ValidCodeInputProps {
  control: Control<UserRegisterFormValueType>
  handleValid: (code: string) => void
  isValidChecked: boolean
}

const ValidCodeInput = ({
  control,
  handleValid,
  isValidChecked,
}: ValidCodeInputProps) => {
  const { field } = useController<UserRegisterFormValueType>({
    name: REGISTER_FIELD_NAMES.validCode,
    control,
  })

  return (
    <>
      <label
        htmlFor={REGISTER_FIELD_NAMES.validCode}
        className="inline-block text-sm mb-2 font-bold"
      >
        인증코드 *
      </label>
      <div className="flex items-center gap-2 mb-1">
        <AuthFormInput
          type="string"
          id={REGISTER_FIELD_NAMES.validCode}
          maxLength={6}
          field={field}
          placeholder="인증코드 6자리를 압력해주세요."
          disabled={isValidChecked}
        >
          {isValidChecked && <FaCheckCircle className="text-green-6" />}
        </AuthFormInput>
        <Button
          type="button"
          size={'sm'}
          disabled={!field.value || field.value?.length < 6 || isValidChecked}
          onClick={() => handleValid(field.value)}
          className="w-16"
        >
          확인
        </Button>
      </div>
    </>
  )
}

export default ValidCodeInput
