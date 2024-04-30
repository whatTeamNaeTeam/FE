import React from 'react'
import AdminSideMenu from '@/_components/AdminSideMenu'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <AdminSideMenu />
      {children}
    </div>
  )
}

export default layout
