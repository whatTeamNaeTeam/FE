# 왓팀내팀 (WTNT) 서비스 프론트엔드

부경대학교 코딩동아리 WAP의 프로젝트 팀 빌딩 플랫폼입니다. 리더가 프로젝트를 올려 포지션별로 팀원을 모집하고 지원자를 수락하거나 거절하며, 동아리 임원진은 어드민에서 회원과 팀을 승인합니다.

- 기간: 2024.03 ~ 2024.10
- 팀 구성: 3인 (Backend, Frontend, App 각 1인)
- 본인 역할: 프론트엔드 단독 개발 (메인 서비스 FE와 어드민 FE 두 레포 전체), 배포 파이프라인 직접 구축
- 이 레포: 메인 서비스 프론트엔드 (어드민 FE는 별도 레포 whatTeamNaeTeam/wtnt-admin)

## 기술 스택

- 언어, 프레임워크: TypeScript 5, Next.js 14 (App Router), React 18
- 상태 관리: TanStack Query 5 (서버 상태), Jotai (클라이언트 전역 상태)
- 폼, UI: react-hook-form, Radix UI, Tailwind CSS 3
- 개발 환경: MSW 2 (목 서버), Storybook 8, pnpm
- 배포: GitHub Actions, AWS S3, AWS CodeDeploy, EC2, PM2

## 주요 구현

- 인증 플로우 전체 구현. GitHub OAuth 로그인과 이메일 인증 코드 회원가입을 붙이고, axios 응답 인터셉터가 401을 감지하면 토큰을 한 번 재발급해 원요청을 재시도합니다. 재시도 플래그로 무한루프를 차단하고, 재발급이 실패하면 세션을 정리한 뒤 인증 에러로 전환합니다.
- 좋아요 낙관적 업데이트. 진행 중 쿼리를 취소하고 스냅샷을 보관한 뒤 캐시를 즉시 반영하고, 실패하면 스냅샷으로 롤백합니다. 서버의 version 필드로 동시성 충돌을 감지해 사용자 안내까지 연결했습니다.
- 서버 상태와 클라이언트 상태 분리. 서버 상태는 React Query로 queries와 mutations 훅을 나누어 관리하고, 무한 스크롤은 useInfiniteQuery와 IntersectionObserver로 구현했습니다. 클라이언트 전역 상태는 Jotai atom으로 분리했습니다.
- snake_case에서 camelCase로 바꾸는 변환 레이어. 런타임 변환 유틸과 컴파일타임 타입 유틸을 함께 두고 React Query의 select 단계에서 적용했습니다.
- MSW 목 서버와 Storybook. 백엔드 없이 프론트엔드를 독립적으로 개발할 수 있도록 MSW를 도입하고, 컴포넌트는 Storybook으로 격리해 개발했습니다.
- CI/CD 직접 구축. GitHub Actions로 빌드를 검증하고, main 머지 시 S3 업로드 후 AWS CodeDeploy로 배포하며 PM2로 reload합니다.

## 디렉토리 구조

애플리케이션 코드는 `what_team_my_team/` 아래에 있습니다.

```
what_team_my_team/
  app/            App Router 라우트
  _components/    UI 컴포넌트
  _hook/          커스텀 훅
  _services/      API 서비스 레이어
  _stores/        Jotai 전역 상태
  _lib/           React Query 설정 등 공통 로직
  _types/         타입 정의
  _utils/         변환 유틸 등
  _mocks/         MSW 핸들러
  stories/        Storybook
  middleware.ts   보호 경로 가드
```

## 실행

```bash
cd what_team_my_team
pnpm install
pnpm dev
```

브라우저에서 http://localhost:3000 으로 접속합니다.
