import React, { Fragment } from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import CheckboxField from "../../../helpers/FormElements/checkboxField";
import TextAreaField from "../../../helpers/FormElements/textAreaField";
import Panel from "../../layout/Panel";

const StepTwo = ({ currentStep, onchange, value }) => {
	if(currentStep !== 2) return null;

  return (
		<Fragment>
			<div className="col-sm-12">
				<TextAreaField
					name="description"
					placeholder="Property Description" 
					value={value.description} 
					label="Description"
					error=""
					onChange={onchange}
				/>
			</div>

			<div className="col-sm-12">
				<ul className="property-features-list">
					<li className="col-sm-2">
						<CheckboxField name="is_tv" value={value.is_tv} label="Cable TV" options="" onChange={onchange} error=""/>
					</li>

					<li className="col-sm-2">
						<CheckboxField name="is_ac" value={value.is_ac} label="AC" options="" onChange={onchange} error=""/>
					</li>

					<li className="col-sm-2">
						<CheckboxField name="is_heating" value={value.is_heating} label="Heating" options="" onChange={onchange} error=""/>
					</li>

					<li className="col-sm-2">
						<CheckboxField name="is_internet" value={value.is_internet} label="WIFI" options="" onChange={onchange} error=""/>
					</li>

					<li className="col-sm-2">
						<CheckboxField name="is_kitchen" value={value.is_kitchen} label="Kitchen" options="" onChange={onchange} error=""/>
					</li>

					<li className="col-sm-2">
						<CheckboxField name="pets" value={value.pets} label="Pets" options="" onChange={onchange} error=""/>
					</li>
				</ul>
			</div>
		</Fragment>
  );
};

StepTwo.displayName = 'StepTwo';

export default StepTwo;