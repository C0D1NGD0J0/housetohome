import React from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import magnifyingGlassSVG from "../../../assets/img/svg/magnifying-glass.svg";

const SearchField = ({ value, onchange }) => {
  return (
  	<div className="search">
			<input type="text" name="search" placeholder="Enter Country or City name" className="search_input" value={value.search} onChange={onchange}/>
			<button className="search_btn">
				<img src={magnifyingGlassSVG} />
			</button>
		</div>
  );
};

SearchField.displayName = 'SearchField';

export default SearchField;