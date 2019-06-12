import React, { Fragment } from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import Panel from "../../layout/Panel";

const StepOne = ({onchange, currentStep, value }) =>{
	if(currentStep !== 1) return null;
	const error = {}; //temp

  return (
  	<Fragment>
	  	<div className="col-sm-6">
				<SelectTag 
					label="Listing Type" 
					name="listingType" 
					error={error.listingType}
					selectChange={onchange}
					value={value.listingType}
					options={['rent', 'sale', 'lease']} 
				/>
	  	</div>

	  	<div className="col-sm-6">
				<SelectTag 
					label="Property Type" 
					name="propertyType"  
					error={error.propertyType}	
					value={value.propertyType}
					selectChange={onchange}
					options={['office', 'condo', 'house', 'land']} 
				/>
	  	</div>

	  	<div className="col-sm-3">
				<InputField
					type="number" 
					className="form-control" 
					placeholder="No. of Bedrooms..." 
					value={value.bedroom}
					name="bedroom"
					error={error.bedroom}
					label="Bedrooms"
					error={error.bedroom}
					onChange={onchange}
				/>
	  	</div>
			
			<div className="col-sm-3">
				<InputField
					type="number" 
					className="form-control" 
					placeholder="No. Bathrooms..." 
					value={value.bathroom}
					name="bathroom"
					error={error.bathroom}
					label="Bathrooms"
					onChange={onchange}
				/>
	  	</div>

	  	<div className="col-sm-3">
				<InputField
					type="number" 
					className="form-control" 
					placeholder="Max number of Occupants..." 
					value={value.maxCapacity}
					name="maxCapacity"
					error={error.maxCapacity}
					label="Max. Capacity"
					onChange={onchange}
				/>
	  	</div>

	  	<div className="col-sm-3">
				<InputField
					type="number" 
					className="form-control" 
					placeholder="Enter Listing Price..." 
					value={value.price}
					name="price"
					error={error.price}
					label="Price"
					onChange={onchange}
				/>
	  	</div>

	  	<div className="col-sm-3">
				<InputField
					type="number" 
					className="form-control" 
					placeholder="Enter Built Year..." 
					value={value.yearBuilt}
					name="yearBuilt"
					error={error.yearBuilt}
					label="Year Built"
					onChange={onchange}
				/>
	  	</div>

	  	<div className="col-sm-3">
				<InputField
					type="text" 
					className="form-control" 
					placeholder="Enter Property Size..." 
					value={value.size}
					name="size"
					error={error.size}
					label="Living Size (sqft)"
					onChange={onchange}
				/>
	  	</div>

	  	<div className="col-sm-3">
				<InputField
					type="number" 
					className="form-control" 
					placeholder="No. Floors..." 
					value={value.floors}
					name="floors"
					error={error.floors}
					label="No. Floors"
					onChange={onchange}
				/>
	  	</div>
			
			<div className="col-sm-3">
				<InputField
					type="number" 
					className="form-control" 
					placeholder="No. Car Parking..." 
					value={value.parking}
					name="parking"
					error={error.parking}
					label="No. Car Parks"
					onChange={onchange}
				/>
	  	</div>
	  </Fragment>	
  );
};

StepOne.displayName = 'StepOne';

export default StepOne;