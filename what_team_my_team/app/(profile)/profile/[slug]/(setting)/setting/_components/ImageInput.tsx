'use client'

import { useState } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { BasicInfoFormValues } from './BasicInfoContainer'
import ProfileAvatar from '@/_components/ProfileAvatar'

interface ImageInputProps {
  imageUrl: string | null
  inputId: string
}

export function ImageInput({ imageUrl, inputId }: ImageInputProps) {
  const [image, setImage] = useState(imageUrl)
  const { control } = useFormContext<BasicInfoFormValues>()
  const { field } = useController<BasicInfoFormValues>({
    name: 'profileImage',
    control,
  })

  const handleChangeFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target

    if (!files || files.length === 0) {
      return
    }

    field.onChange(files)

    const newImageUrl = URL.createObjectURL(files[0])
    setImage(newImageUrl)
  }

  return (
    <label
      htmlFor={inputId}
      className="w-32 h-32 rounded-full hover:cursor-pointer"
    >
      <input
        id={inputId}
        accept="image/*"
        type="file"
        className="w-0 h-0"
        onChange={handleChangeFileInput}
      />
      {image && (
        <ProfileAvatar
          imgUrl={image}
          alt="profile"
          size={'2xl'}
          className="border"
        />
      )}
    </label>
  )
}
