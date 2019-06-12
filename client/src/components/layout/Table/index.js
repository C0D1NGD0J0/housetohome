import React from 'react';
import TableHead from "./header";
import TableBody from "./body";

const Table = ({ resource }) => {
	const headers = Object.keys(resource[0]);
	
	return (
  	<table className="table table-condensed table-bordered customTable">
	    <TableHead headers={headers}/>
			<TableBody headers={headers} resource={resource}/>
	  </table> 
  );
};


Table.displayName = 'Table';


export default Table;