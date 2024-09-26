'use client'

import React from 'react'
import { NotFoundErrorPage } from './NotFoundErrorPage'
import { CustomError } from '@/_types/error'

interface Props {
  children: React.ReactNode
}
interface State {
  hasError: boolean
  error?: Error
}

const initialState: State = {
  hasError: false,
  error: undefined,
}

export class CommonErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = initialState
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this)
  }

  static getDerivedStateFromError(error: Error) {
    console.log('played')
    return { hasError: true, error }
  }

  resetErrorBoundary(): void {
    const { error } = this.state

    if (error !== null) {
      this.setState(initialState)
    }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log({ error, errorInfo })
  }

  render() {
    const error = this.state.error
    if (error instanceof CustomError) {
      if (error.errorCode === '9999') {
        const title = '알 수 없는 에러가 발생하였습니다.'
        const content = '계속해서 문제가 발생한다면 관리자에게 문의해주세요.'
        return (
          <NotFoundErrorPage
            title={title}
            label={content}
            onReset={this.resetErrorBoundary}
          />
        )
      }
    }
    if (this.state.hasError) {
      return <NotFoundErrorPage onReset={this.resetErrorBoundary} />
    }

    return this.props.children
  }
}
