import React, { Fragment } from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import Panel from "../../layout/Panel";

const StepOne = (props) => {
  return (
  	<Fragment>
	  	<div className="col-sm-6">
				<SelectTag 
					label="Listing Type" 
					name="listingType" 
					selectChange="" 
					value="" 
					options={['rent', 'sale', 'lease']} 
				/>
	  	</div>

	  	<div className="col-sm-6">
				<SelectTag 
					label="Property Type" 
					name="propertyType" 
					selectChange="" 
					value=""
					onChange=""
					options={['office', 'condo', 'house', 'land']} 
				/>
	  	</div>

	  	<div className="col-sm-3">
				<InputField
					type="number" 
					className="form-control" 
					placeholder="No. of Bedrooms..." 
					value=""
					name="bedroom"
					label="Bedrooms"
					onChange="" 
				/>
	  	</div>
			
			<div className="col-sm-3">
				<InputField
					type="number" 
					className="form-control" 
					placeholder="No. Bathrooms..." 
					value=""
					name="bathroom"
					label="Bathrooms"
					onChange="" 
				/>
	  	</div>

	  	<div className="col-sm-3">
				<InputField
					type="number" 
					className="form-control" 
					placeholder="Max number of Occupants..." 
					value=""
					name="maxCapacity"
					label="Max. Capacity"
					onChange="" 
				/>
	  	</div>

	  	<div className="col-sm-3">
				<InputField
					type="number" 
					className="form-control" 
					placeholder="Enter Listing Price..." 
					value=""
					name="price"
					label="Price"
					onChange="" 
				/>
	  	</div>

	  	<div className="col-sm-4">
				<InputField
					type="number" 
					className="form-control" 
					placeholder="Enter Built Year..." 
					value=""
					name="yearBuilt"
					label="Year Built"
					onChange="" 
				/>
	  	</div>

	  	<div className="col-sm-4">
				<InputField
					type="text" 
					className="form-control" 
					placeholder="Enter Property Size..." 
					value=""
					name="price"
					label="Living Size (sqft)"
					onChange="" 
				/>
	  	</div>

	  	<div className="col-sm-4">
				<InputField
					type="number" 
					className="form-control" 
					placeholder="No. Floors..." 
					value=""
					name="floors"
					label="No. Floors"
					onChange="" 
				/>
	  	</div>
			
			<div className="col-sm-5">
				<InputField
					type="number" 
					className="form-control" 
					placeholder="No. Car Parking..." 
					value=""
					name="parking"
					label="No. Car Parks"
					onChange="" 
				/>
	  	</div>
	  </Fragment>	
  );
};

StepOne.displayName = 'StepOne';

export default StepOne;