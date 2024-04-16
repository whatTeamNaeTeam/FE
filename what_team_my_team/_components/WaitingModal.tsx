'use client'

import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

interface WaitingModalProps {
  open: boolean
}

const WaitingModal = ({ open }: WaitingModalProps) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-dialog animate-overlay" />
        <Dialog.Content className="w-60 h-32 flex flex-col justify-between bg-white fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 animate-content rounded-md p-4">
          <Dialog.Description className="h-full">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="loader-dots block relative w-20 h-5 mt-2">
                <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
                <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
                <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
                <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-gray-500 text-xs font-medium mt-2 text-center">
                로그인 중입니다...
              </p>
            </div>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default WaitingModal
