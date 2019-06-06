import React, { Fragment } from 'react';
import ElementWrapper from "./FormElementWrapper";

const InputField = ({ name, placeholder, value, label, type, onChange }) => {
  return (
    <ElementWrapper error="">
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				id={name}
				className="form-control" 
				placeholder={placeholder} 
				value={value}
				name={name}
				onChange={onChange} 
			/>
		</ElementWrapper>  
  );
};

InputField.displayName = 'InputField';

InputField.defaultProps = {
  type: "text"
};

export default InputField;
