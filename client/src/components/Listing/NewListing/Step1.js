import React, { Fragment } from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import Panel from "../../layout/Panel";
import staticData from "./staticData";

const StepOne = ({onchange, currentStep, value, error, options, isAdmin}) =>{
	if(currentStep !== 1) return null;
	console.log(value.handler);
  return (
  	<Fragment>
	  	<div className="col-sm-6">
				<SelectTag 
					label="Listing Type" 
					name="listingType" 
					error={error && error.listingType}
					selectChange={onchange}
					value={value.listingType}
					options={staticData.listingType} 
				/>
	  	</div>

	  	<div className="col-sm-6">
				<SelectTag 
					label="Property Type" 
					name="propertyType"  
					error={error && error.propertyType}	
					value={value.propertyType}
					selectChange={onchange}
					options={staticData.propertyType} 
				/>
	  	</div>

	  	<div className="col-sm-3">
				<InputField
					type="number" 
					className="form-control" 
					placeholder="No. of Bedrooms..." 
					value={value.bedroom}
					name="bedroom"
					error={error && error.bedroom}
					label="Bedrooms"
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
					error={error && error.bathroom}
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
					error={error && error.maxCapacity}
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
					error={error && error.price}
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
					error={error && error.yearBuilt}
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
					error={error && error.size}
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
					error={error && error.floors}
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
					error={error && error.parking}
					label="No. Car Parks"
					onChange={onchange}
				/>
	  	</div>
			
			{	isAdmin ?
		  	<div className="col-sm-12">
					<SelectTag 
						label="Assign Agent" 
						name="handler"  
						error={error && error.handler}	
						value={value.handler}
						selectChange={onchange}
						options={options} 
					/>
		  	</div> : null
		  }
	  </Fragment>	
  );
};

StepOne.displayName = 'StepOne';

export default StepOne;