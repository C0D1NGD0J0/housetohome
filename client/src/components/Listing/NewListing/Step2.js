import React, { Fragment } from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import CheckboxField from "../../../helpers/FormElements/checkboxField";
import TextAreaField from "../../../helpers/FormElements/textAreaField";
import Panel from "../../layout/Panel";

const StepTwo = ({ currentStep, onchange, value }) => {
	if(currentStep !== 2) return null;
	const ischecked = (value) => (value === true ? true : false);
	const error = {};
	
  return (
		<Fragment>
			<div className="col-sm-12">
				<TextAreaField
					name="description"
					placeholder="Property Description" 
					value={value.description} 
					label="Description"
					error={error.description}
					onChange={onchange}
				/>
			</div>

			<div className="col-sm-12">
				<ul className="property-features-list">
					<li className="col-sm-2">
						<CheckboxField name="is_tv" label="Cable TV" isChecked={ischecked(value.is_tv)} onSelectChange={onchange} error={error.is_tv} />
					</li>

					<li className="col-sm-2">
						<CheckboxField name="is_ac" label="AC" isChecked={ischecked(value.is_ac)} onSelectChange={onchange} error={error.is_ac}/>
					</li>

					<li className="col-sm-2">
						<CheckboxField name="is_heating" label="Heating" isChecked={ischecked(value.is_heating)} onSelectChange={onchange} error={error.is_heating}/>
					</li>

					<li className="col-sm-2">
						<CheckboxField name="is_internet" label="WIFI" isChecked={ischecked(value.is_internet)} onSelectChange={onchange} error={error.is_internet}/>
					</li>

					<li className="col-sm-2">
						<CheckboxField name="is_kitchen" label="Kitchen" isChecked={ischecked(value.is_kitchen)} onSelectChange={onchange} error={error.is_kitchen}/>
					</li>

					<li className="col-sm-2">
						<CheckboxField name="pets" label="Pets" isChecked={ischecked(value.pets)} onSelectChange={onchange} error={error.pets}/>
					</li>
				</ul>
			</div>

			<div className="col-sm-12">
				<ul className="property-features-list">
					<li className="col-sm-2">
						<CheckboxField 
							name="featured"
							label="Featured"
							error={error.featured}
							isChecked={ischecked(value.featured)}
							onSelectChange={onchange}
						/>
					</li>

					<li className="col-sm-2">
						<CheckboxField 
							name="isActive"
							label="Publish"
							error={error.isActive}
							isChecked={ischecked(value.isActive)}
							onSelectChange={onchange}
						/>
					</li>
				</ul>
			</div>
		</Fragment>
  );
};

StepTwo.displayName = 'StepTwo';

export default StepTwo;