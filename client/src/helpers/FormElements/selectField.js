import React, { Fragment } from 'react';

const SelectTag = ({ label, name, selectChange, value, options }) => {
  return (
  	<Fragment>
			{/*<span class="control-label">Property Type</span>*/}
			<label htmlFor={name}>{label}</label>
			<select name={name} value={value} onChange={selectChange} id={name}>
				<option value={value} disabled>{value}</option>
				
				{ options && options.map(item =>{
						return (<option key={item} value={item}>{item.toUpperCase()}</option>);
					})
				}
			</select>
		</Fragment>
  );
};

SelectTag.displayName = 'SelectTag';

export default SelectTag;