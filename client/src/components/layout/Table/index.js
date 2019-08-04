import React from 'react';

const Table = ({ children }) => {
	return (
  	<table className="table table-bordered customTable">
			{children}
	  </table> 
  );
};


Table.displayName = 'Table';


export default Table;