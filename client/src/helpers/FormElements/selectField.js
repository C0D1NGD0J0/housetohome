import React from 'react';
import ElementWrapper from "./FormElementWrapper";

const SelectTag = ({ label, name, selectChange, value, options, error }) => {
	let defaultVal;

	if(value.length === 24){
		defaultVal = `${options[value].firstName} ${options[value].lastName}`;
	};

  return (
  	<ElementWrapper error={error}>
			<label htmlFor={name}>{label}</label>
			<select name={name} value={value} onChange={selectChange} id={name}>
				<option value={value} disabled>{value.length >= 24 ? defaultVal : value}</option>
				
				{
					Array.isArray(options) ? 
						options.map((item, i) =>{
							return (<option key={i} value={item}>{item}</option>);
						})
					: Object.values(options).filter((user) => user.id !== value).map((user, i) =>{
						return (<option key={i} value={user.id}>{user.firstName.toUpperCase()}</option>);
					})
				}
			</select>
		</ElementWrapper>
  );
};

SelectTag.displayName = 'SelectTag';

export default SelectTag;