import React from 'react';
import SelectTag from "../../../helpers/FormElements/selectField";
import RangeField from "../../../helpers/FormElements/rangeField";
import staticData from "../NewListing/staticData";

const FilterSidebar = ({ value, onchange, resetFilter }) => {

  return (
		<div className="sidebar_box sidebar_filter">
			<h3>Filter</h3><hr/>

			<ul className="sidebar_menu filter_options">
				<li>
					<SelectTag 
						label="Listing Type" 
						name="listingType" 
						selectChange={onchange}
						value={value.listingType}
						options={staticData.listingType} 
					/>							
				</li>
				<li>
					<SelectTag 
						label="Property Type" 
						name="propertyType" 
						selectChange={onchange}
						value={value.propertyType}
						options={staticData.propertyType} 
					/>						
				</li>
				<li>
					<SelectTag 
						label="Bedrooms" 
						name="bedroom" 
						selectChange={onchange}
						value={value.bedroom}
						options={staticData.bedrooms} 
					/>					
				</li>
				<li>
					<RangeField name="price" value={value.price} label="Property Price" onChange={onchange} min={100000} max={800000} step={500}/>	
				</li>
				<li>
					<RangeField name="size" value={value.size} label="Property Size" onChange={onchange} min={500} max={100000} step={500}/>	
				</li>

				<li>
					<button className="btn btn-danger" onClick={resetFilter}>RESET</button>
				</li>
			</ul>
		</div>
  );
};

FilterSidebar.displayName = 'FilterSidebar';

export default FilterSidebar;