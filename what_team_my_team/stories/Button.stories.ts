import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from '@/_components/ui/Button'

const meta = {
  title: 'Components/Ui/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: { onClick: fn(), children: 'Button' },

  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
      defaultValue: false,
    },
    variant: {
      control: 'select',
      options: ['primary', 'lined'],
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'full', 'icon'],
    },
    children: {
      defaultValue: 'Button',
      description: '버튼 안의 내용',
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

export const Lined: Story = {
  args: {
    variant: 'lined',
  },
}
