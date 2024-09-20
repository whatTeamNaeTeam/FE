'use client'

import { CustomError, HttpError } from '@/_types/error'
import React from 'react'
import { NotFoundErrorPage } from './NotFoundErrorPage'
import {
  ErrorMessage,
  isDuplicatedPositionApplyError,
  isForbiddenError,
  isNotFoundTeamError,
  isPositionLimitExceededError,
} from '@/_lib/error'
import toast from 'react-hot-toast'

interface Props {
  children: React.ReactNode
}

interface State {
  shouldHandleError: boolean
  shouldRethrow: boolean
  error: Error | CustomError | null
}

const initialState: State = {
  shouldHandleError: false,
  shouldRethrow: false,
  error: null,
}

export class ApiErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = initialState
    this.reset = this.reset.bind(this)
  }

  static getDerivedStateFromError(error: Error) {
    if (error instanceof HttpError) {
      return {
        shouldHandleError: true,
        shouldRethrow: false,
        error,
      }
    }
    return { shouldHandleError: false, shouldRethrow: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo)
  }

  reset() {
    this.setState(initialState)
  }

  render() {
    const { shouldHandleError, shouldRethrow, error } = this.state
    const { children } = this.props

    if (shouldRethrow) {
      throw error
    }

    if (!shouldHandleError) {
      return children
    }

    if (error instanceof HttpError) {
      const errorCode = error.errorCode
      const errorMessage = ErrorMessage[errorCode]

      if (isNotFoundTeamError(errorCode)) {
        const title = errorMessage

        return <NotFoundErrorPage title={title} />
      }
      if (isDuplicatedPositionApplyError(errorCode)) {
        toast.error(errorMessage)
      }
      if (isForbiddenError(errorCode)) {
        toast.error(errorMessage)
      }
      if (isPositionLimitExceededError(errorCode)) {
        toast.error(errorMessage)
      }
    }

    if (this.state.error !== null && shouldHandleError !== null) {
      this.reset()
    }
  }
}
