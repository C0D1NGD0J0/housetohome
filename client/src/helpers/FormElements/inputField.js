import React from 'react';
import ElementWrapper from "./FormElementWrapper";

const InputField = ({ name, placeholder, value, label, type, onChange, error }) => {
  return (
    <ElementWrapper error={error}>
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
