export interface CustomErrorResponse {
  message: string
  code: string
}
export class CustomError extends Error {
  errorCode: string

  constructor(errorCode: string) {
    super()
    this.errorCode = errorCode
  }
}
export class HttpError extends CustomError {
  status: number

  constructor(status: number, errorCode: string) {
    super(errorCode)
    this.name = 'HttpError'
    this.status = status
  }
}
export class AuthError extends HttpError {
  constructor(status: number, errorCode: string) {
    super(status, errorCode)
    this.name = 'AuthError'
  }
}
export class NotFoundError extends HttpError {
  constructor(status: number, errorCode: string) {
    super(status, errorCode)
    this.name = 'NotFoundError'
  }
}
export class DuplicatedError extends HttpError {
  constructor(status: number, errorCode: string) {
    super(status, errorCode)
    this.name = 'DuplicatedError'
  }
}
export class LimitExceededError extends HttpError {
  constructor(status: number, errorCode: string) {
    super(status, errorCode)
    this.name = 'LimitExceededError'
  }
}
export class ValidateError extends HttpError {
  constructor(status: number, errorCode: string) {
    super(status, errorCode)
    this.name = 'ValidateError'
  }
}

/***
 * case: 00xx
 * Not Found: status code with 404
 *
 * 0000: 해당하는 유저가 존재하지 않는 케이스
 * 0001: 해당하는 팀이 존재하지 않는 케이스
 * 0002: 해당하는 기술스택이 존재하지 않는 케이스
 * 0003: 해당하는 팀 지원이 존재하지 않는 케이스
 * 0004: 해당하는 유저가 팀원으로써 팀에 존재하지 않는 케이스
 *
 * Request: status code with 400
 * 0010: 요청 자체가 기대한 스키마가 아닌 케이스
 *
 * case: 01xx
 * Login Issue: status code with 400
 *
 * name field
 * 0100: 특수 문자, 숫자, 공백이 포함된 실명인 케이스
 * 0101: 이름의 길이가 2 ≤ 길이 ≤ 12 를 벗어난 케이스
 *
 * studentNum field
 * 0110: 특수 문자, 공백이 포함된 케이스
 * 0111: 7 ≤ 길이 ≤ 10 를 벗어난 케이스
 * 0112: 학번이 중복된 케이스
 *
 * position field
 * 0120: 정해진 범주 내의 포지션이 아닌 케이스
 */
