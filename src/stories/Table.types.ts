// You can import this type from the ag-grid library, and use it to extract the type for columnDefs
import { AgGridReactProps } from 'ag-grid-react'

// This is the shape of the data your table is expecting
export type row = {
  make: string
  model: string
  price: number
  type?: string
}

// This type will be used by storybook to define which controls are available
export interface TableType {
  isDark?: boolean
  pagination?: boolean
  perPage?: number
  rowData?: Array<row>
  columnDefs?: AgGridReactProps['columnDefs']
  filter?: boolean
  sortable?: boolean
  resizable?: boolean
}