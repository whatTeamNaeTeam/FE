import type { Meta, StoryObj } from '@storybook/react'
import AssignTable from '@/app/(admin)/admin/(member)/assign/_components/AssignTable'
import { exampleData } from './exampleData'
import { assignTableColumns } from '@/app/(admin)/admin/(member)/assign/_components/TableContainer'

const meta = {
  title: 'Components/Table',
  component: AssignTable,
} satisfies Meta<typeof AssignTable>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { tableData: exampleData, columns: assignTableColumns },
}
