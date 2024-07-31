import { SelectedAssignMember } from '@/_services/queries/useAssignMemberList'
import { ConvertSnakeToCamel } from '@/_utils/convertSnakeToCamel'
import { ColumnDef, Row, Table } from '@tanstack/react-table'

export type TableType = EntireData | AssignData | TeamAssignCamel

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

export type TeamAssignTableCellProps<T extends TableType> = {
  row: Row<T>
  table: Table<T>
}

export interface AssignData extends SelectedAssignMember {}
export interface EntireData {
  id: number
  name: string
  studentNum: string
  createdAt: string
}

export interface TeamAssign {
  id: number
  title: string
  genre: string
  created_at: string
  leader_info: LeaderInfo
}
export type LeaderInfo = {
  id: number
  name: string
  image_url: string
  student_num: string
  position: string
}
export type TeamAssignCamel = ConvertSnakeToCamel<TeamAssign>
