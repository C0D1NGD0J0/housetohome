import React from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import CheckboxField from "../../../helpers/FormElements/checkboxField";

const FilterSidebar = ({ className }) => {
  return (
		<div className="sidebar_box sticky sidebar_filter">
			<h3>Filter</h3><hr/>

			<ul className="sidebar_menu filter_options">
				<li>
					<div className="form-group">
						<span className="control-label">Listing Type</span>
						<select className="">
							{/*<option selected disabled></option>*/}
							<option value="sale">Sale</option>
							<option value="rent">Rent</option>
							<option value="lease">Lease</option>
						</select>
					</div>								
				</li>
				<li>
					<div className="form-group">
						<span className="control-label">Property Type</span>
						<select>
							{/*<option selected disabled></option>*/}
							<option value="apartment">House</option>
							<option value="apartment">Apartments</option>
							<option value="apartment">Office Space</option>
							<option value="apartment">Empty Land</option>
							<option value="apartment">Condominium</option>
						</select>
					</div>								
				</li>
				<li>
					<div className="form-group">
						<span className="control-label">Bedrooms</span>
						<select className="">
							{/*<option selected disabled></option>*/}
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
							<option value="4+">Four(+)</option>
						</select>
					</div>								
				</li>
				<li>
					<div className="form-group">
						<span className="control-label">Property Price: $<span id="price">00.00</span> </span>
						<input type="range" name="price" className="form-control" min="0" max="200000" step="0.01" id='priceRange' />
					</div>								
				</li>
				<li>
					<div className="form-group">
						<span className="control-label">Property Size: <small>(sqft)</small></span>
						<input type="range" name="size" className="form-control" min="0" max="250000" step="100" />
					</div>								
				</li>
			</ul>
		</div>
  );
};

FilterSidebar.displayName = 'FilterSidebar';

export default FilterSidebar;