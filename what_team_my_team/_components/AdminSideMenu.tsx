'use client'

import React from 'react'
import MemberManageAccordion from '../app/(admin)/admin/(member)/assign/_components/MemberManageAccordion'

const AdminSideMenu = () => {
  return (
    <div className="h-screen w-[240px] flex-shrink-0 bg-gray-7">
      <MemberManageAccordion />
    </div>
  )
}

export default AdminSideMenu
