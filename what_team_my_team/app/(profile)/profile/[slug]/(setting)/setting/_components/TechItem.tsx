'use client'

import { useEffect, useRef, useState } from 'react'
import {
  useController,
  UseFieldArrayRemove,
  useFormContext,
} from 'react-hook-form'
import { TechFormValue } from './TechContainer'
import { GoCheck, GoPencil, GoTrash, GoX } from 'react-icons/go'

interface TechItemProps {
  index: number
  remove: UseFieldArrayRemove
  editMode?: boolean
}

export function TechItem({ index, editMode = true, remove }: TechItemProps) {
  const [isEditMode, setIsEditMode] = useState(editMode)
  const { control } = useFormContext<TechFormValue>()
  const { field } = useController({ name: `techList.${index}`, control })

  const handleEditMode = (mode: boolean) => {
    setIsEditMode(mode)
  }

  return (
    <>
      <div className="flex gap-2 text-xs rounded-2xl h-6 p-1 px-2 bg-indigo-4 text-white ">
        {isEditMode ? (
          <TechInput index={index} setIsEditMode={setIsEditMode} />
        ) : (
          <>
            <span className="min-w-2">{field.value.name}</span>
            <div className="flex">
              <button type="button" onClick={() => remove(index)}>
                <GoTrash />
              </button>
              <button type="button" onClick={() => handleEditMode(true)}>
                <GoPencil />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

interface TechInputProps {
  index: number
  setIsEditMode: React.Dispatch<boolean>
}

function TechInput({ index, setIsEditMode }: TechInputProps) {
  const { control } = useFormContext<TechFormValue>()
  const { field } = useController({ name: `techList.${index}`, control })
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState(field.value.name)
  const [inputWidth, setInputWidth] = useState(3)

  const handleClickEditFinishBtn = () => {
    field.onChange({ name: value })
    setIsEditMode(false)
  }

  useEffect(() => {
    if (inputRef.current) {
      setInputWidth(
        inputRef.current.value.length > 3 ? inputRef.current.value.length : 3,
      )
    }
  }, [value])

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
        maxLength={12}
        ref={inputRef}
        style={{ width: inputWidth + 'ch' }}
        className={`bg-inherit`}
      />
      <div className="flex items-center">
        <button type="button" onClick={handleClickEditFinishBtn}>
          <GoCheck />
        </button>
        <button type="button" onClick={() => setIsEditMode(false)}>
          <GoX />
        </button>
      </div>
    </>
  )
}
