import React, { PropTypes } from 'react';

const TableBody = ({ resource }) => {

  return (
  	<tbody>
  		{resource.map((obj, i) =>{
				return (
					<tr key={i}><td>{obj}</td></tr>
	      )
  		})}
    </tbody>  
  );
};

TableBody.displayName = 'TableBody';

export default TableBody;