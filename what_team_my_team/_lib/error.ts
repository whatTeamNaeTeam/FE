import { ErrorCode } from '@/_types/error'

export function isNotFoundTeamError(errorCode: string) {
  return errorCode === ErrorCode.TEAM_NOT_FOUND
}
export function isDuplicatedPositionApplyError(errorCode: string) {
  return errorCode === ErrorCode.POSITION_APPLY_IS_DUPLICATED
}
export function isForbiddenError(errorCode: string) {
  return errorCode === ErrorCode.FORBIDDEN
}
export function isPositionLimitExceededError(errorCode: string) {
  return errorCode === ErrorCode.POSITION_IS_FULL
}
export function isProjectTitleValidationError(errorCode: string) {
  return errorCode === ErrorCode.TEAM_TITLE_VALIDATE_ERROR
}
export function isProjectTitleDuplicatedError(errorCode: string) {
  return errorCode === ErrorCode.TEAM_TITLE_IS_DUPLICATED
}
export function isProjectExplainValidationError(errorCode: string) {
  return errorCode === ErrorCode.TEAM_EXPLAIN_IS_TOO_LONG
}
export function isLinkEmptyError(errorCode: string) {
  return errorCode === ErrorCode.LINK_IS_EMPTY
}
export function isNotAllowedCategoryError(errorCode: string) {
  return errorCode === ErrorCode.CATEGORY_IS_NOT_ALLOWED
}
export function isCategoryMemberValidate(errorCode: string) {
  return errorCode === ErrorCode.CATEGORY_MEMBER_VALIDATE_ERROR
}
export function isNotAllowedGenreError(errorCode: string) {
  return errorCode === ErrorCode.GENRE_IS_NOT_ALLOWED
}
export function isNotAllowedImageType(errorCode: string) {
  return errorCode === ErrorCode.IMAGE_TYPE_IS_NOT_ALLOWED
}
export function isTokenExpiredError(status: number) {
  return status === 401 || status === 403
}
export function isLikeVersionError(errorCode: string) {
  return errorCode === ErrorCode.LIKE_VERSION_ERROR
}
