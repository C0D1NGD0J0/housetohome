import React, { PropTypes } from 'react';
import TableHead from "./header";
import TableBody from "./body";

const Table = ({ resource }) => {
	const headerTitles = Object.keys(resource[0]);
	
  return (
  	<table className="table table-condensed table-bordered customTable">
	    <TableHead headerTitles={headerTitles}/>
			<TableBody resource={resource}/>
	  </table> 
  );
};


Table.displayName = 'Table';


export default Table;