'use client'

import React, { Dispatch } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import Button from './ui/Button'
import Link from 'next/link'

interface SignupModalProps {
  open: boolean
  setOpen: Dispatch<React.SetStateAction<boolean>>
}

const SignupModal = ({ open, setOpen }: SignupModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-dialog animate-overlay" />
        <Dialog.Content className="w-60 h-60 flex flex-col justify-between bg-white fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 animate-content rounded-md p-4">
          <Dialog.Description>
            <p>
              가입 신청이 완료되었습니다. 가입자의 승인 이후 활동을 하실 수
              있습니다.
            </p>
          </Dialog.Description>
          <Dialog.Close asChild>
            <Button asChild>
              <Link href={'/'}>확인</Link>
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SignupModal
