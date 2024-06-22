'use client'

import React from 'react'
import AuthFormInput from '@/_components/AuthFormInput'
import { Control, useController } from 'react-hook-form'
import {
  REGISTER_FIELD_NAMES,
  UserRegisterFormValueType,
} from './SignupContainer'

interface NameInputProps {
  control: Control<UserRegisterFormValueType>
}

const NameInput = ({ control }: NameInputProps) => {
  const { field } = useController<UserRegisterFormValueType>({
    name: REGISTER_FIELD_NAMES.name,
    control,
  })

  return (
    <>
      <label
        htmlFor={REGISTER_FIELD_NAMES.name}
        className="inline-block text-sm mb-2 font-bold"
      >
        이름 *
      </label>
      <AuthFormInput
        type="string"
        id={REGISTER_FIELD_NAMES.name}
        field={field}
        placeholder="ex)홍길동"
        maxLength={7}
      />
    </>
  )
}

export default NameInput
