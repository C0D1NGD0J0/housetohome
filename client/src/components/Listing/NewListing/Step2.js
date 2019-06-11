import React, { Fragment } from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import CheckboxField from "../../../helpers/FormElements/checkboxField";
import TextAreaField from "../../../helpers/FormElements/textAreaField";
import Panel from "../../layout/Panel";

const StepTwo = (props) => {
  return (
		<Fragment>
			<div className="col-sm-12">
				<TextAreaField
					name="description"
					placeholder="Property Description" 
					value="" 
					label="Description"
					error=""
					onChange=""
				/>
			</div>

			<div className="col-sm-12">
				<ul className="property-features-list">
					<li className="col-sm-2">
						<CheckboxField name="is_tv" value="" label="Cable TV" options="" onSelectChange="" error=""/>
					</li>

					<li className="col-sm-2">
						<CheckboxField name="is_ac" value="" label="AC" options="" onSelectChange="" error=""/>
					</li>

					<li className="col-sm-2">
						<CheckboxField name="is_heating" value="" label="heating" options="" onSelectChange="" error=""/>
					</li>

					<li className="col-sm-2">
						<CheckboxField name="is_internet" value="" label="WIFI" options="" onSelectChange="" error=""/>
					</li>

					<li className="col-sm-2">
						<CheckboxField name="is_kitchen" value="" label="Kitchen" options="" onSelectChange="" error=""/>
					</li>

					<li className="col-sm-2">
						<CheckboxField name="pets" value="" label="Pets" options="" onSelectChange="" error=""/>
					</li>
				</ul>
			</div>
		</Fragment>
  );
};

StepTwo.displayName = 'StepTwo';

export default StepTwo;