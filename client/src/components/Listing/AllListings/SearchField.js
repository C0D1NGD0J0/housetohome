import React from 'react';
import magnifyingGlassSVG from "../../../assets/img/svg/magnifying-glass.svg";

const SearchField = ({ value, onchange }) => {
  return (
  	<div className="search">
			<input 
				type="text" 
				name="search" 
				placeholder="Enter Country name, City name, property address" 
				className="search_input" 
				value={value} 
				onChange={onchange}
			/>
			<button className="search_btn">
				<img src={magnifyingGlassSVG} alt="search-btn"/>
			</button>
		</div>
  );
};

SearchField.displayName = 'SearchField';

export default SearchField;