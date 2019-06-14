import React from 'react';
import ElementWrapper from "./FormElementWrapper";

const InputField = ({ name, placeholder, value, label, type, onChange, error, autocomplete, keyDownFunc, disabled }) => {

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
				onKeyDown={keyDownFunc}
				onChange={onChange}
				disabled={disabled}
				autoComplete={autocomplete}
			/>
		</ElementWrapper>  
  );
};

InputField.displayName = 'InputField';

InputField.defaultProps = {
  type: "text",
  autoComplete: "false",
  disabled: false
};

export default InputField;
