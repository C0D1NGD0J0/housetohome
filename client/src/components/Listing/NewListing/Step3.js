import React, { Fragment } from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import CheckboxField from "../../../helpers/FormElements/checkboxField";
import TextAreaField from "../../../helpers/FormElements/textAreaField";
import Panel from "../../layout/Panel";

const StepThree = ({ currentStep, onchange, value }) => {
	if(currentStep !== 3) return null;
	const error = {};
	
  return (
		<Fragment>
			<div className="col-sm-12">
				<div id="gmap"></div>
			</div>

			<div className="col-sm-12">
				<InputField
					className="form-control" 
					placeholder="Property Address..." 
					value={value.address}
					name="address"
					error={error.address}
					label="Address"
					onChange={onchange}
				/>
			</div>

			<div className="col-xs-6">
				<InputField
					className="form-control" 
					placeholder="Enter longitude..." 
					value={value.lng}
					name="longitude"
					error={error.lng}
					label="Longitude"
					onChange={onchange}
				/>
			</div>

			<div className="col-xs-6">
				<InputField
					className="form-control" 
					placeholder="Enter Latitude..." 
					value={value.lat}
					name="latitude"
					error={error.lat}
					label="Latitude"
					onChange={onchange}
				/>
			</div>
		</Fragment>
  );
};

StepThree.displayName = 'StepThree';

export default StepThree;