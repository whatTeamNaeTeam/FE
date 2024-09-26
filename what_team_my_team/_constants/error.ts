export const ErrorCode = {
  USER_NOT_FOUND: '0000', // done
  TEAM_NOT_FOUND: '0001', // done
  POSITION_IS_FULL: '0500', // done
  POSITION_APPLY_IS_DUPLICATED: '0501', // done
  TEAM_TITLE_VALIDATE_ERROR: '0200', // done
  TEAM_TITLE_IS_DUPLICATED: '0201', // done
  TEAM_EXPLAIN_IS_TOO_LONG: '0230', // done
  IMAGE_TYPE_IS_NOT_ALLOWED: '0250',
  GENRE_IS_NOT_ALLOWED: '0210', // done
  CATEGORY_IS_NOT_ALLOWED: '0220', // done
  CATEGORY_MEMBER_VALIDATE_ERROR: '0221', // done
  LINK_IS_EMPTY: '0240', // done
  LIKE_VERSION_ERROR: '0270',
  FORBIDDEN: '0300', // bad
  ADMIN_FORBIDDEN: '0301',
  TEAM_LEADER_FORBIDDEN: '0302',
  NOT_PROFILE_MASTER: '0303',
  NOT_IN_TEAM: '0304',
  REFRESH_TOKEN_EXPIRED: '0410',
  UNKNOWN_ERROR: '9999',
} as const

export const ErrorMessage: Record<string, string> = {
  [ErrorCode.USER_NOT_FOUND]: '원하시는 유저 프로필을 찾을 수 없습니다.',
  [ErrorCode.TEAM_NOT_FOUND]: '원하시는 팀을 찾을 수 없습니다.',
  [ErrorCode.POSITION_APPLY_IS_DUPLICATED]: '중복된 지원입니다.',
  [ErrorCode.POSITION_IS_FULL]: '모집이 마감되었습니다.',
  [ErrorCode.FORBIDDEN]: '로그인 후 이용할 수 있습니다.',
  [ErrorCode.TEAM_TITLE_VALIDATE_ERROR]:
    '프로젝트 제목은 최소 2자 이상 30자 이하로 작성해야 됩니다.',
  [ErrorCode.TEAM_TITLE_IS_DUPLICATED]:
    '프로젝트 제목이 다른 프로젝트와 중복됩니다. 제목을 바꿔주세요.',
  [ErrorCode.TEAM_EXPLAIN_IS_TOO_LONG]:
    '프로젝트 설명은 최소 1자 이상 2천자 이하로 작성해야 됩니다.',
  [ErrorCode.CATEGORY_IS_NOT_ALLOWED]:
    '허용되지 않은 카테고리입니다. 다시 한번 확인해 주시고 같은 문제가 계속 발생하면 관리자에게 문의해주세요.',
  [ErrorCode.CATEGORY_MEMBER_VALIDATE_ERROR]:
    '모집인원은 최대 5명 까지입니다. 다시 한번 확인해 주시고 같은 문제가 계속 발생하면 관리자에게 문의해주세요.',
  [ErrorCode.GENRE_IS_NOT_ALLOWED]:
    '허용되지 않은 프로젝트 유형입니다. 다시 한번 확인해 주시고 같은 문제가 계속 발생하면 관리자에게 문의해주세요.',
  [ErrorCode.IMAGE_TYPE_IS_NOT_ALLOWED]:
    '허용되지 않은 이미지 파일 형식입닌다.',
  [ErrorCode.LINK_IS_EMPTY]:
    '공백인 관련링크가 있습니다. 다시 한번 확인해주세요.',
  [ErrorCode.LIKE_VERSION_ERROR]: '새로고침 후 다시 시도해주세요.',
  [ErrorCode.UNKNOWN_ERROR]: '알 수 없는 오류가 발생하였습니다.',
}
