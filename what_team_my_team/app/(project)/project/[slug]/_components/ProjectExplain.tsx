'use client'

import MDEditor from '@uiw/react-md-editor'
import React from 'react'

interface ProjectExplainProps {
  explain: string
}

export function ProjectExplain({ explain }: ProjectExplainProps) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">프로젝트 설명</h3>
      <div data-color-mode="light">
        <MDEditor.Markdown
          source={explain}
          style={{ whiteSpace: 'pre-wrap' }}
        />
      </div>
    </div>
  )
}
