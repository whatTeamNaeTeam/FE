import React from 'react'
import { Preview } from '@storybook/react'
import '../styles/global.css'
import Layout from '../app/layout'
import {fn} from '@storybook/test'

const preview: Preview = {
  parameters: {
    actions: { handleClick: fn()},
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

// export const decorators = [
//   (Story) => {
//     return React.createElement(Layout,{
//       children:React.createElement(Story)
//     })
//   }
// ]

export default preview
