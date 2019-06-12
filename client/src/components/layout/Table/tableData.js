import React, { PropTypes } from 'react';

const TableDataElement = ({headers, obj, key}) => {
  return headers.map((key, i) =>{
  	return <td key={obj[key]}>{obj[key]}</td>
  })
};

TableDataElement.displayName = 'TableDataElement';

export default TableDataElement;