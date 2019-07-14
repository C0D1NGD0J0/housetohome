import React from 'react';
import { Link } from "react-router-dom";

const NearByLsiting = (props) => {
	const{ listings, listingId } = props;

	const nearby_listings = listings && listings.filter((item) => item.id !== listingId).map((listing) =>{
		return(
			<li className="media" key={listing.id}>
				<div className="pull-left">
					<img src="https://via.placeholder.com/150" alt="" className="img-responsive" width="65px"/>
				</div>

				<div className="media-body">
					<h4 className="media-heading"><Link to={`/properties/${listing.id}`}>{listing.formatAddress.street}</Link></h4>
					<p><span>{listing.features.bedroom}Beds</span> | <span>{listing.features.bathroom}Baths</span> | <span>{listing.price}</span></p>
				</div>
			</li>
		);
	});
	

  return (
    <div className="sidebar_box nearby_listings">
			<h4>Other Vacations Listings</h4><hr/>
			<ul className="nearby_listings-list">
				{nearby_listings}
			</ul>
		</div>  
  );
};

NearByLsiting.displayName = 'NearByLsiting';

export default NearByLsiting;