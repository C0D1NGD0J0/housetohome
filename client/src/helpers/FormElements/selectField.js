import React from 'react';
import ElementWrapper from "./FormElementWrapper";

const SelectTag = ({ label, name, selectChange, value, options, error }) => {
  return (
  	<ElementWrapper error={error}>
			<label htmlFor={name}>{label}</label>
			<select name={name} value={value} onChange={selectChange} id={name}>
				<option value={value} disabled selected hidden>{value}</option>
				
				{ options && options.map(item =>{
						return (<option key={item} value={item}>{item.toUpperCase()}</option>);
					})
				}
			</select>
		</ElementWrapper>
  );
};

SelectTag.displayName = 'SelectTag';

export default SelectTag;