'use client'

import React from 'react'
import AuthFormInput from '@/_components/AuthFormInput'
import {
  REGISTER_FIELD_NAMES,
  UserRegisterFormValueType,
} from './SignupContainer'
import { Control, useController } from 'react-hook-form'

interface StudentNumInputProps {
  control: Control<UserRegisterFormValueType>
}

const StudentNumInput = ({ control }: StudentNumInputProps) => {
  const { field } = useController<UserRegisterFormValueType>({
    name: REGISTER_FIELD_NAMES.studentNum,
    control,
  })

  return (
    <>
      <label
        htmlFor={REGISTER_FIELD_NAMES.studentNum}
        className="inline-block text-sm mb-2 font-bold"
      >
        학번 *
      </label>
      <AuthFormInput
        type="string"
        id={REGISTER_FIELD_NAMES.studentNum}
        field={field}
        placeholder="ex)201812379"
        maxLength={9}
      />
    </>
  )
}

export default StudentNumInput
