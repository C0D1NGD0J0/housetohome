import React, { Fragment } from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import CheckboxField from "../../../helpers/FormElements/checkboxField";
import TextAreaField from "../../../helpers/FormElements/textAreaField";
import Panel from "../../layout/Panel";

const StepThree = (props) => {
  return (
		<Fragment>
			<div className="col-sm-12">
				<div id="gmap"></div>
			</div>

			<div className="col-sm-12">
				<InputField
					className="form-control" 
					placeholder="Property Address..." 
					value=""
					name="address"
					label="Address"
					onChange="" 
				/>
			</div>

			<div className="col-xs-6">
				<InputField
					className="form-control" 
					placeholder="Enter longitude..." 
					value=""
					name="longitude"
					label="Longitude"
					onChange="" 
				/>
			</div>

			<div className="col-xs-6">
				<InputField
					className="form-control" 
					placeholder="Enter Latitude..." 
					value=""
					name="latitude"
					label="Latitude"
					onChange="" 
				/>
			</div>
		</Fragment>
  );
};

StepThree.displayName = 'StepThree';

export default StepThree;