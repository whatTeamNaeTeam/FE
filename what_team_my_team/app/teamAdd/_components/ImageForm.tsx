'use client'

import Button from '@/_components/ui/Button'
import React, { useState } from 'react'
import { Control, useController } from 'react-hook-form'
import { TeamAddFormValueType } from './FormContainer'

interface ImageFormProps {
  control: Control<TeamAddFormValueType>
}

const ImageForm = ({ control }: ImageFormProps) => {
  const [image, setImage] = useState<string | undefined>()
  const { field } = useController({ name: 'image', control })

  const handleChangeFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (!files || files.length === 0) {
      return
    }

    field.onChange(files)

    const ImageUrl = URL.createObjectURL(files[0])
    setImage(ImageUrl)
  }

  return (
    <div className="w-full">
      <h5 className="mb-2 font-bold">대표이미지</h5>
      <div className="flex flex-wrap gap-x-8 gap-y-4">
        <div className="w-full h-[520px] max-w-[600px] max-h-[400px] min-w-[300px] min-h-[200px]">
          <label
            htmlFor="imageInput"
            className="relative block border w-full h-full"
          >
            <input
              id="imageInput"
              accept="image/*"
              type="file"
              className="w-0 h-0"
              onChange={handleChangeFileInput}
            />
            <img
              src="/assets/camera.svg"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            {image && (
              <img
                src={image}
                className="w-full h-full absolute inset-0"
                alt="thumnail"
              />
            )}
          </label>
        </div>
        <div className="flex flex-col justify-end flex-shrink-0">
          <Button asChild variant={'lined'} className="mb-2">
            <label htmlFor="imageInput" className="w-[160px]">
              이미지 업로드
            </label>
          </Button>
          <p className="text-sm">저작권에 위배되지 않는 사진을 올려주세요.</p>
        </div>
      </div>
    </div>
  )
}

export default ImageForm
