import { SelectedAssignMember } from '@/_services/queries/useAssignMemberList'
import { ColumnDef, Row, Table } from '@tanstack/react-table'

export type TableType = EntireData | AssignData

export interface ReactTableProps<T> {
  tableData: T[]
  columns: ColumnDef<T, unknown>[]
}
export interface TableCellProps {
  getValue: () => string | number
}
export interface AssignTableCellProps extends TableCellProps {
  row?: Row<AssignData>
  table?: Table<AssignData>
}
export interface ManageTableCellProps extends TableCellProps {}

export interface AssignData extends SelectedAssignMember {}
export interface EntireData {
  id: number
  name: string
  studentNum: string
  createdAt: string
}
