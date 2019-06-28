import React from 'react';
import ElementWrapper from "./FormElementWrapper";

const RangeField = ({ name, value, label, onChange, min, max, step }) => {
			
  return (
    <ElementWrapper>
			<label htmlFor={name}>{label}: {value}</label>
			<input
				type="range"
				id={name}
				min={min}
				max={max}
				step={step}
				className="form-control"
				value={value}
				name={name}
				onChange={onChange}
			/>
		</ElementWrapper>  
  );
};

RangeField.displayName = 'RangeField';

export default RangeField;
