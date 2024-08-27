import { ManageNavigation } from './_components/ManageNavigation'

const layout = ({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { slug: string } }>) => {
  const teamId = params.slug

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <ManageNavigation teamId={teamId} />
      {children}
    </div>
  )
}

export default layout
