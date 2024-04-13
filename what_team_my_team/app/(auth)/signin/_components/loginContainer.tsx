import React from 'react'
import SocialLoginBtn from './SocialLoginBtn'

const LoginContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[320px] h-[320px] border mt-[120px]">
      <div>
        <span>WAP</span>
      </div>
      <div className="w-full px-4 my-2">
        <SocialLoginBtn type="github" />
      </div>
      <div className="w-60">
        <p className="text-gray-6 text-xs">
          <span>로그인 시 WAP의 </span>
          <span className="underline-offset-2 underline">개인정보처리방침</span>
          <span>과 </span>
          <span className="underline-offset-2 underline">이용 약관</span>
          <span>에 동의한 것으로 간주합니다.</span>
        </p>
      </div>
    </div>
  )
}

export default LoginContainer
