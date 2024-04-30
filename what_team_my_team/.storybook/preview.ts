import React from 'react'
import { Preview } from '@storybook/react'
import '../styles/global.css'
import Layout from '../app/layout'

const preview: Preview = {
  decorators:[
    (Story) => {
      return React.createElement(Layout,{
        children:React.createElement(Story)
      })
    }
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true
    },
  },
}

export default preview
