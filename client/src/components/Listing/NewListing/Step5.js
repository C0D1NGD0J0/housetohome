import React, { Fragment } from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import CheckboxField from "../../../helpers/FormElements/checkboxField";
import TextAreaField from "../../../helpers/FormElements/textAreaField";
import Panel from "../../layout/Panel";

const StepFive = ({ currentStep, onchange, value }) => {
	if(currentStep !== 5) return null;
	const ischecked = (value) => (value === true ? true : false);

  return (
		<Fragment>
			<h4 style={{paddingLeft: "2rem", marginBottom: "0"}}>Admin Settings</h4>
			<div className="col-sm-12">
				<ul className="property-features-list">
					<li className="col-sm-4">
						<CheckboxField 
							name="featured"
							label="Featured"
							isChecked={ischecked(value.featured)}
							onSelectChange={onchange}
						/>
					</li>

					<li className="col-sm-4">
						<CheckboxField 
							name="isActive"
							label="Publish"
							isChecked={ischecked(value.isActive)}
							onSelectChange={onchange}
						/>
					</li>
				</ul>
			</div>

			{/*<div className="col-sm-12">
				<SelectTag 
					label="Property Handler" 
					name="handler" 
					onChange={onchange}
					value={value.handler} 
					options={['rent', 'sale', 'lease']} 
				/>
			</div>*/}
		</Fragment>
  );
};

StepFive.displayName = 'StepFive';

export default StepFive;