'use client'
import React, { useEffect } from 'react'

interface ValidTimerProps {
  timer: number | null
  setTimer: React.Dispatch<React.SetStateAction<number | null>>
}

const ValidTimer = ({ timer, setTimer }: ValidTimerProps) => {
  const formatTime = (timer: number) => {
    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    if (timer === null) {
      return
    }

    const id = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer !== null && prevTimer > 0) {
          return prevTimer - 1
        } else {
          clearInterval(id)
          return prevTimer
        }
      })
    }, 1000)

    return () => clearInterval(id)
  }, [timer, setTimer])

  if (timer === null) {
    return null
  }

  return (
    <div className="flex justify-end w-full text-xs text-gray-6">
      {timer > 0 ? (
        <span>{formatTime(timer)}</span>
      ) : (
        <span className="text-red-8">
          인증 시간이 만료되었습니다. 다시 인증해주세요.
        </span>
      )}
    </div>
  )
}

export default ValidTimer
