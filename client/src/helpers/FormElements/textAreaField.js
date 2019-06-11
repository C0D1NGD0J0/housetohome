import React from 'react';
import ElementWrapper from "./FormElementWrapper";

const TextAreaField = ({name, placeholder, value, label, error, onChange, row}) => {  
  return (
    <ElementWrapper error={error}>
      <label htmlFor={name}>{label}</label>
      <textarea
        rows={row}
        name={name} 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
      />
    </ElementWrapper>
  );
};

TextAreaField.defaultProps = {
  row: "3"
}

export default TextAreaField;