import type { Meta, StoryObj } from '@storybook/react'
import ProjectCardSkeleton from '@/_components/ProjectCardSkeleton'

const meta = {
  title: 'Components/ProjectCardSkeleton',
  component: ProjectCardSkeleton,
} satisfies Meta<typeof ProjectCardSkeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
