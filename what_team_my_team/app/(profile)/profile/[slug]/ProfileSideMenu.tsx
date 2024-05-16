const ProfileSideMenu = () => {
  return (
    <aside className="flex flex-col w-full max-w-[240px]">
      <div className="flex flex-col gap-8 mb-40">
        <span className="text-xl text-gray-6">프로필</span>
        <span className="text-xl text-gray-6">내 활동</span>
        <span className="text-xl text-gray-6">팀 관리</span>
      </div>
      <span className="text-xl text-red-6">로그아웃</span>
    </aside>
  )
}

export default ProfileSideMenu
