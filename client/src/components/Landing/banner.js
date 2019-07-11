import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SearchField from "../Listing/AllListings/SearchField";
import { connect } from "react-redux";
import { searchListingsAction } from "../../actions/listingAction";

const HeroSection = (props) => {
	const { searchListingsAction } = props;
	const [searchValue, setSearchValue] = useState("");
	
	const handleSearchRequest = (e) =>{
		e.preventDefault();
		searchListingsAction(searchValue, "/");
	};

  return (
    <section id="home" className="home">
			<div className="home_cover">
				<div className="home_content">
					<div className="home_content-heading">
						<h1>Find your place <span className='green-text'>with our local</span> life style.</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni qui magnam, perferendis non minus ipsa.</p>
					</div>
					
					<div className="home_content-searchbar">
						<form onSubmit={handleSearchRequest}>
							<SearchField value={searchValue} onchange={(e) => setSearchValue(e.target.value)} />
						</form>
					</div>
				</div>
			</div>
		</section>
  );
};

HeroSection.displayName = 'HeroSection';

export default connect(null, {searchListingsAction})(HeroSection);