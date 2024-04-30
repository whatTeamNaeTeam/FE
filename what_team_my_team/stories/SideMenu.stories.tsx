import type { Meta, StoryObj } from '@storybook/react'
import SideMenu from '@/app/(admin)/(user)/user/_components/SideMenu'

const meta = {
  title: 'Components/SideMenu',
  component: SideMenu,
} satisfies Meta<typeof SideMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
