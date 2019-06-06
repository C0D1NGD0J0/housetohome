import React from 'react';
import classnames from "classnames";

const ElementWrapper = (props) => {
	const { error } = props;
	
  return (
  	<div className={classnames("form-group", {"has-errors": error})}>
			{props.children}
      {error && (<small className="help-block text-muted">{error}</small>)}
  	</div>
  );
};

ElementWrapper.displayName = 'ElementWrapper';

export default ElementWrapper;