import MemberContainer from './_components/MemberContainer'

const page = ({ params }: { params: { slug: string } }) => {
  const teamId = params.slug

  console.log(teamId)
  return (
    <div className="w-full max-w-[1048px] px-2">
      <MemberContainer teamId={teamId} />
    </div>
  )
}

export default page
