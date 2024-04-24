import type { Meta, StoryObj } from '@storybook/react'
import LinkItem from '@/app/teamAdd/_components/LinkItem'

const meta = {
  title: 'Example/LinkItem',
  component: LinkItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof LinkItem>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { index: 0 },
}
