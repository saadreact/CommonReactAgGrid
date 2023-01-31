import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// import the types you defined for this component
import { TableType } from "./Table.types";

const Table = ({ isDark, rowData, pagination = false, perPage = 10, columnDefs, sortable = false, filter = false, resizable = false }: TableType) => {

		// This will generate a string that changes each time one of the pagination props changes
		const key = React.useMemo(() => {
			const prefix = pagination ? 'paginated' : 'not-paginated';
			return `${prefix}:${perPage}`;
		}, [pagination, perPage]);
	
		// This will use some of your props to create a default column definition for all columns
		const defaultColDef = React.useMemo(() => {
			return {
				editable: true,
				sortable: sortable,
				flex: 1,
				minWidth: 100,
				filter: filter,
				resizable: resizable,
			};
		}, [sortable, filter, resizable]);

   return (
	<div
	// the theme can be dynamically assigned based on the `isDark` prop
	className={`ag-grid-default-table ${isDark ? "ag-theme-dark" : "ag-theme-balham"}`}
	style={{ height: 400, width: 850 }}>
	<AgGridReact
		// the variables can be passed in here, moving the data and configuration out of this component
		key={key} // using this value as the key forces the table to re-render when the pagination props change
		rowData={rowData}
		columnDefs={columnDefs}
		pagination={pagination}
		paginationPageSize={perPage}
		defaultColDef={defaultColDef}
	/>
</div>
   );
};

export default Table;
