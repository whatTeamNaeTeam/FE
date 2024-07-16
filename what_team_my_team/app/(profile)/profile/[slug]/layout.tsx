import ProfileSideMenu from './ProfileSideMenu'

const layout = ({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { slug: string } }>) => {
  const userId = params.slug

  return (
    <div className="flex justify-center w-full">
      <div className="flex w-full max-w-[840px]">
        <ProfileSideMenu userId={userId} />
        {children}
      </div>
    </div>
  )
}

export default layout
