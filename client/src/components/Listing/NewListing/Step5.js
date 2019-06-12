import React, { Fragment } from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import CheckboxField from "../../../helpers/FormElements/checkboxField";
import TextAreaField from "../../../helpers/FormElements/textAreaField";
import Panel from "../../layout/Panel";

const StepFive = ({ currentStep, values }) => {
	if(currentStep !== 5) return null;
	const liElement = Object.keys(values).map((key, i) =>(
		<li key={i} className="list-group-item">
			<h5>{key}:</h5> <span>{values[key]}</span>
		</li>
	));

  return (
		<div className="col-sm-12">
			<ul className="list-group listing-info-overview">
				{liElement}
			</ul>

			<button className="btn btn-danger pull-right">Create New Listing</button>
		</div>
  );
};

StepFive.displayName = 'StepFive';

export default StepFive;