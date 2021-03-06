import React from 'react';
import { Link } from "react-router-dom";
import { formatDisplayPrice } from "../../../helpers";

const ListingCard = (props) => {
	const { listing, keyProps } = props;
	
  return (
    <div className="card property">
			<Link to={`/properties/${listing.id}`}>
				<div className="card_img-wrapper">
					<span className="property_type sale">{listing.listingType}</span>
					<img src="http://www.starafricacorporation.com/wp-content/uploads/2016/12/about_us_001.jpg" alt="" className="img-responsive" />
				</div>

				<div className="card_content">
					<h3 className="card_content-title">
						{`${listing.formatAddress.street}, ${listing.formatAddress.city}`}
					</h3><hr/>
					
					<ul className="property_amenities-list">
						<li><i className="fa fa-bathtub"></i> {listing && listing.features.bathroom}</li>
						<li><i className="fa fa-bed"></i> {listing && listing.features.bedroom}</li>
						<li><i className="fa fa-size"></i> {listing && listing.size}sqFt</li>
						<li><i className="fa fa-calendar"></i> {listing && listing.yearBuilt}</li>
					</ul>
				</div>

				<div className="card_footer">
					<h4>{formatDisplayPrice("$", listing)}</h4>
				</div>
			</Link>
		</div>
  );
};

ListingCard.displayName = 'ListingCard';

export default ListingCard;