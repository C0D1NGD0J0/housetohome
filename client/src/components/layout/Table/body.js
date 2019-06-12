import React from 'react';
import TableData from "./tableData";

const TableBody = ({ headers, resource }) => {
	const tableRow = resource.map((obj, i) =>{
		return <tr key={i}><TableData key={i} obj={obj} headers={headers}/></tr>
	});

  return (
  	<tbody>
  		{tableRow}
    </tbody>  
  );
};

TableBody.displayName = 'TableBody';

export default TableBody;