import React, { Fragment } from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import CheckboxField from "../../../helpers/FormElements/checkboxField";
import TextAreaField from "../../../helpers/FormElements/textAreaField";
import Panel from "../../layout/Panel";

const StepTwo = ({ currentStep, onchange, value, checkBoxChange, error }) => {
	if(currentStep !== 2) return null;
	const ischecked = (value) => (value === true ? true : false);
	
  return (
		<Fragment>
			<div className="col-sm-12">
				<TextAreaField
					name="description"
					placeholder="Property Description" 
					value={value.description} 
					label="Description"
					error={error && error.description}
					onChange={onchange}
				/>
			</div>

			<div className="col-sm-12">
				<ul className="property-features-list">
					<li>
						<CheckboxField name="is_tv" label="Cable TV" isChecked={ischecked(value.is_tv)} onSelectChange={checkBoxChange} error={error && error.is_tv} />
					</li>

					<li>
						<CheckboxField name="is_ac" label="AC" isChecked={ischecked(value.is_ac)} onSelectChange={checkBoxChange} error={error && error.is_ac}/>
					</li>

					<li>
						<CheckboxField name="is_heating" label="Heating" isChecked={ischecked(value.is_heating)} onSelectChange={checkBoxChange} error={error && error.is_heating}/>
					</li>

					<li>
						<CheckboxField name="is_internet" label="WIFI" isChecked={ischecked(value.is_internet)} onSelectChange={checkBoxChange} error={error && error.is_internet}/>
					</li>

					<li>
						<CheckboxField name="is_kitchen" label="Kitchen" isChecked={ischecked(value.is_kitchen)} onSelectChange={checkBoxChange} error={error && error.is_kitchen}/>
					</li>

					<li>
						<CheckboxField name="is_gym" label="Gym" isChecked={ischecked(value.is_gym)} onSelectChange={checkBoxChange} error={error && error.is_gym}/>
					</li>

					<li>
						<CheckboxField name="is_laundry" label="Laundry" isChecked={ischecked(value.is_laundry)} onSelectChange={checkBoxChange} error={error && error.is_laundry}/>
					</li>

					<li>
						<CheckboxField name="swimming_pool" label="Swimming Pool" isChecked={ischecked(value.swimming_pool)} onSelectChange={checkBoxChange} error={error && error.swimming_pool}/>
					</li>

					<li>
						<CheckboxField name="pets" label="Pets" isChecked={ischecked(value.pets)} onSelectChange={checkBoxChange} error={error && error.pets}/>
					</li>

					<li>
						<CheckboxField 
							name="featured"
							label="Featured"
							error={error && error.featured}
							isChecked={ischecked(value.featured)}
							onSelectChange={checkBoxChange}
						/>
					</li>

					<li>
						<CheckboxField 
							name="isActive"
							label="Publish"
							error={error && error.isActive}
							isChecked={ischecked(value.isActive)}
							onSelectChange={checkBoxChange}
						/>
					</li>
				</ul>
			</div>
		</Fragment>
  );
};

StepTwo.displayName = 'StepTwo';

export default StepTwo;