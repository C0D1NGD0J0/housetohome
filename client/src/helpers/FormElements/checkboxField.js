import React from 'react';
import ElementWrapper from "./FormElementWrapper";

const CheckBoxField = ({ name, isChecked, label, onSelectChange, cssclass, error }) => {
  return (
    <ElementWrapper error={error}>
      <div className="checkbox">
        <label htmlFor={name}>
          <input
            id={name} 
            name={name}
            type="checkbox"
            className={cssclass}
            checked={isChecked}
            onChange={onSelectChange}
          /><span>{label}</span>
        </label>
      </div>
    </ElementWrapper>
  );
};

CheckBoxField.defaultProps = {
  cssclass: "false"
};

export default CheckBoxField;