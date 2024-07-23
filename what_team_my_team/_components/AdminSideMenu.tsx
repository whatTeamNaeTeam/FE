'use client'

import React from 'react'
import MemberManageAccordion from '../app/(admin)/admin/(member)/assign/_components/MemberManageAccordion'
import TeamManageAccordion from '@/app/(admin)/admin/(team)/team/assign/_components/TeamManageAccordion'

const AdminSideMenu = () => {
  return (
    <div className="h-screen w-[240px] flex-shrink-0 bg-gray-7">
      <MemberManageAccordion />
      <TeamManageAccordion />
    </div>
  )
}

export default AdminSideMenu
