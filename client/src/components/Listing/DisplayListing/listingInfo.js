import React from 'react';
import Moment from "react-moment";
import classnames from "classnames";
import GoogleMap from "./googleMap";

const ListingInfo = ({ listing }) => {
  return (
 		<div className="listing">
			<h1 className="listing_title">
				{listing && listing.formatAddress.street},
				<span className="listing_city">{`${listing && listing.formatAddress.city}, ${listing && listing.formatAddress.postCode}, ${listing && listing.formatAddress.country}`}</span>
			</h1>

			<div className="listing_header">
				<div className="listing_price">
					<strong className="listing_price-value">${listing && listing.price.toFixed(2)}</strong>
				</div>
				<div className="listing_meta">
					<ul className="listing_meta-list list-inline">
						<li>{listing && listing.features.bedroom}<span>bed</span></li>
						<li>{listing && listing.features.bathroom}<span>bath</span></li>
						<li>{listing && listing.size} <span>sqft</span></li>
						<li><span>{listing && listing.propertyType}</span></li>
					</ul>
				</div>
			</div><div className="clearfix"></div>

			<div className="listing_media">
				<div className="listing_media-ribbon"><span>{listing && listing.listingType}</span></div>
				<div className="listing_media-image">
					{

						listing && listing.photos > 0 ?
							<img src={listing.photos && listing.photos[0].src} alt={listing.photos && listing.photos[0].filename} className="img-responsive"/>
						:
							<img src="http://www.starafricacorporation.com/wp-content/uploads/2016/12/about_us_001.jpg" alt="" className="img-responsive"/>
					}
				</div>
			</div>
			<div className="clearfix"></div>

			<div className="listing_short-info">
				<div style={{width: "100%"}}>
					<h4 className="listing_subtitle">Overview</h4><hr className="hr_long"/>
				</div>

				<div className="listing_short-info_item">
					<span>Property Type: <strong>{listing && listing.propertyType}</strong></span>
				</div>
				<div className="listing_short-info_item">
					<span>Date Listed: <strong><Moment format="DD/MM/YYYY">{listing && listing.createdAt}</Moment></strong></span>
				</div>
				<div className="listing_short-info_item">
					<span>Living Size: <strong>{listing && listing.size}sqft</strong></span>
				</div>
				<div className="listing_short-info_item">
					<span>Year Built: <strong>{listing && listing.yearBuilt}</strong></span>
				</div>
				<div className="listing_short-info_item">
					<span>Parking Space: <strong>{listing && listing.features.parking}</strong></span>
				</div>
				<div className="listing_short-info_item">
					<span>Floor: <strong>{listing && listing.features.floors}</strong></span>
				</div>
				<div className="listing_short-info_item">
					<span>Bedroom: <strong>{listing && listing.features.bedroom}</strong></span>
				</div>
				<div className="listing_short-info_item">
					<span>Bathroom: <strong>{listing && listing.features.bathroom}</strong></span>
				</div>
			</div>

			<div className="listing_amenities">
				<h4 className="listing_subtitle">Amenities</h4><hr className="hr_long"/>
				<ul className="amenities_list">
					<li className={classnames({"not_provided": !(listing && listing.extras.is_ac)})}>
						<i className="fa fa-check-circle-o"></i>
						<span>Air Conditioning</span>
					</li>
					<li className={classnames({"not_provided": !(listing && listing.extras.is_internet)})}>
						<i className="fa fa-check-circle-o"></i>
						<span>Wireless Internet</span>
					</li>
					<li className={classnames({"not_provided": !(listing && listing.extras.is_kitchen)})}>
						<i className="fa fa-check-circle-o"></i>
						<span>Kitchen (supplies)</span>
					</li>
					<li className={classnames({"not_provided": !(listing && listing.extras.is_tv)})}>
						<i className="fa fa-check-circle-o"></i>
						<span>Cable TV</span>
					</li>
					<li className={classnames({"not_provided": !(listing && listing.extras.is_heating)})}>
						<i className="fa fa-check-circle-o"></i>
						<span>Heating</span>
					</li>
					<li className={classnames({"not_provided": !(listing && listing.extras.is_gym)})}>
						<i className="fa fa-check-circle-o"></i>
						<span>Fitness Center (Gym)</span>
					</li>
					<li className={classnames({"not_provided": !(listing && listing.extras.swimming_pool)})}>
						<i className="fa fa-check-circle-o"></i>
						<span>Swimming Pool</span>
					</li>
					<li className={classnames({"not_provided": !(listing && listing.extras.is_laundry)})}>
						<i className="fa fa-check-circle-o"></i>
						<span>Laundry</span>
					</li>
					<li className={classnames({"not_provided": !(listing && listing.extras.is_pets)})}>
						<i className="fa fa-check-circle-o"></i>
						<span>Pets</span>
					</li>
				</ul>
			</div>

			<div className="listing_description">
				<h4 className="listing_subtitle">Description:</h4><hr className="hr_long"/>
				{listing && listing.description}
			</div>

			<div className="listing_map">
				<h4 className="listing_subtitle">Map:</h4><hr className="hr_long"/>
				<GoogleMap listingLocation={listing && listing.location}/>
			</div>
		</div>
  );
};

ListingInfo.displayName = 'ListingInfo';

export default ListingInfo;