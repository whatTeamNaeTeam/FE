import ProfileSideMenu from './ProfileSideMenu'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex w-full max-w-[840px]">
        <ProfileSideMenu />
        {children}
      </div>
    </div>
  )
}

export default layout
