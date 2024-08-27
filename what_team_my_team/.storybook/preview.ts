import { Preview } from '@storybook/react'
import '../styles/global.css'
import { fn } from '@storybook/test'

const preview: Preview = {
  parameters: {
    actions: { handleClick: fn() },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
}

export default preview
