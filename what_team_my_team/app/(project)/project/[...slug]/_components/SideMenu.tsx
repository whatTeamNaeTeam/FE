'use client'

import Button from '@/_components/ui/Button'
import React from 'react'

const SideMenu = () => {
  return (
    <div className="hidden flex-shrink-0 w-60 md:block ">
      <aside className="w-60 fixed">
        <div className="flex flex-col gap-2">
          <Button className="">지원하기</Button>
          <Button variant={'lined'}>관심</Button>
        </div>
      </aside>
    </div>
  )
}

export default SideMenu
