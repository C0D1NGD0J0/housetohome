import React, { Fragment } from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import CheckboxField from "../../../helpers/FormElements/checkboxField";
import TextAreaField from "../../../helpers/FormElements/textAreaField";
import Panel from "../../layout/Panel";

const StepFive = ({ currentStep, onchange, value }) => {
	if(currentStep !== 5) return null;

  return (
		<Fragment>
			<h4 style={{paddingLeft: "2rem", marginBottom: "0"}}>Admin Settings</h4>
			<div className="col-sm-12">
				<ul className="property-features-list">
					<li className="col-sm-4">
						<CheckboxField name="featured" value="" label="Featured" options="" onSelectChange="" error=""/>
					</li>

					<li className="col-sm-4">
						<CheckboxField name="active" value="" label="Publish" options="" onSelectChange="" error=""/>
					</li>
				</ul>
			</div>

			<div className="col-sm-12">
				<SelectTag 
					label="Property Handler" 
					name="listingType" 
					selectChange="" 
					value="" 
					options={['rent', 'sale', 'lease']} 
				/>
			</div>
		</Fragment>
  );
};

StepFive.displayName = 'StepFive';

export default StepFive;