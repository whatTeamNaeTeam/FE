import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    // '../app/**/*.stories.tsx'
  ],
  features:{
    experimentalRSC: true,
  },
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal:async (config) =>{
    if(config.resolve) {
      config.resolve.alias = {
        ...config.resolve?.alias,
        '@':path.resolve(__dirname,'../'),
      }
    }
    
    return config
  }
}
export default config
