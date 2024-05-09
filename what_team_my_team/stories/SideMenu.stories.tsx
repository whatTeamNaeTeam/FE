import type { Meta, StoryObj } from '@storybook/react'
import AdminSideMenu from '@/_components/AdminSideMenu'

const meta = {
  title: 'Components/SideMenu',
  component: AdminSideMenu,
} satisfies Meta<typeof AdminSideMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
