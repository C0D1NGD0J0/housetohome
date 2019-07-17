import React from 'react';
import { Link } from "react-router-dom";
import {truncateText, formatDisplayPrice} from "../../helpers/";
import ListingCard from "../Listing/AllListings/ListingCard";
import house_1 from "../../assets/img/house_1.jpg";
import house_2 from "../../assets/img/house_2.jpg";
import house_3 from "../../assets/img/house_3.jpg";
import house_4 from "../../assets/img/house_4.jpg";

const FeaturedProperty = (props) => {
	const { properties } = props;
	console.log(properties);

	const displayListingCard = properties && properties.map((listing) =>{
		return(
			<div className="col-xs-6 col-sm-6 col-md-3">
				<div className="property">
					<Link to={`/properties/${listing.id}`}>
						<div className="property_img">
							<span className="property_type forsale">{listing.listingType}</span>
							<img src={house_1} alt="" className="img-responsive"/>
						</div>

						<div className="property_info">
							<div className="property_info-content">
								<h3>{`${listing.propertyType} for ${listing.listingType}`}</h3>
								<p>{truncateText(listing.description, 100)}</p>
								<ul className="property_info-content_amenities">
									<li><i className="fa fa-bathtub"></i> {listing.features.bathroom}</li>
									<li><i className="fa fa-bed"></i> {listing.features.bathroom}</li>
									<li><i className="fa fa-size"></i> {listing.size}sq ft</li>
									<li><i className="fa fa-calendar"></i> {listing.yearBuilt}</li>
								</ul>
							</div>
							<h4>{formatDisplayPrice("$", listing)}</h4>
						</div>
					</Link>
				</div>
			</div>
		);
	});

  return (
  	<section id="featured-properties" className="grey-bg">
			<div className="container">
				<div className="section-title">
					<h2>Featured Listings</h2><hr/><br/>
				</div>

				<div className="row">
					{ displayListingCard }
				</div>

				<div className="row">
					<div className="col-xs-12 text-center">
						<br/><Link to="/properties" className="btn btn-green_ghost">View More Listings</Link>
					</div>
				</div>
			</div>
		</section>
  );
};

FeaturedProperty.displayName = 'FeaturedProperty';

export default FeaturedProperty;