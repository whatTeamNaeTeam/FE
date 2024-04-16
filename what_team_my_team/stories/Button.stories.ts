import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from '@/_components/ui/Button'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default',
    weight: 'bold',
    children: '버튼입니다',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'lined',
    size: 'default',
    weight: 'bold',
    children: '버튼입니다',
  },
}

export const Third: Story = {
  args: {
    variant: 'filledDisabled',
    size: 'default',
    weight: 'bold',
    children: '버튼입니다',
  },
}

export const LinedDisabled: Story = {
  args: {
    variant: 'linedDisabled',
    size: 'default',
    weight: 'bold',
    children: '버튼입니다',
  },
}

export const IconBtn: Story = {
  args: {
    variant: 'default',
    size: 'icon',
    weight: 'bold',
    children: '버튼입니다',
  },
}
