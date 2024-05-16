import type { Meta, StoryObj } from '@storybook/react'
import ProfileAvatar from '@/_components/ProfileAvatar'

const meta = {
  title: 'Components/ProfileAvatar',
  component: ProfileAvatar,
} satisfies Meta<typeof ProfileAvatar>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    imgUrl:
      'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    alt: 'taegong',
    size: 'large',
  },
}
