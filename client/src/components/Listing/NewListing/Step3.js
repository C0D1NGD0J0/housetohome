import React, { Fragment } from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import CheckboxField from "../../../helpers/FormElements/checkboxField";
import TextAreaField from "../../../helpers/FormElements/textAreaField";
import Panel from "../../layout/Panel";

const StepThree = ({ currentStep, onchange, value, error, fn }) => {
	if(currentStep !== 3) return null;
	
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
					error={error && error.address}
					label="Address"
					keyDownFunc={fn}
					onChange={onchange}
				/>
			</div>

			<div className="col-xs-6">
				<InputField
					className="form-control" 
					placeholder="Enter longitude..." 
					value={value.longitude}
					name="longitude"
					error={error && error.longitude}
					label="Longitude"
					onChange={onchange}
					disabled={true}
				/>
			</div>

			<div className="col-xs-6">
				<InputField
					className="form-control" 
					placeholder="Enter Latitude..." 
					value={value.latitude}
					name="latitude"
					error={error && error.latitude}
					label="Latitude"
					readOnly="true"
					onChange={onchange}
					disabled={true}
				/>
			</div>
		</Fragment>
  );
};

StepThree.displayName = 'StepThree';

export default StepThree;