import React from 'react';
import Moment from "react-moment";
import classnames from "classnames";

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
					<img src="http://www.starafricacorporation.com/wp-content/uploads/2016/12/about_us_001.jpg" alt="" className="img-responsive"/>
				</div>
			</div><div className="clearfix"></div>

			<div className="listing_short-info well">
				<div style={{width: "100%"}}>
					<h4 className="listing_subtitle">Overview</h4><hr className="hr"/>
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

			<div className="listing_amenities well">
				<h4 className="listing_subtitle">Amenities</h4><hr className="hr"/>
				<ul className="listing_amenities-list row">
					<li className="listing_amenities-list_item">
						<div>
							<i className={classnames("fa",
								{"fa-times": !(listing && listing.extras.is_ac), 
								"fa-check": (listing && listing.extras.is_ac)})}>
							</i>
							<span className={classnames({"not_provided": !(listing && listing.extras.is_ac)})}>
								AC/Central Cooling
							</span>
						</div>
					</li>
					<li className="listing_amenities-list_item">
						<div>
							<i className="fa fa-check"></i>
							<span>AC & Heating</span>
						</div>
					</li>
					<li className="listing_amenities-list_item">
						<div>
							<i className="fa fa-check"></i>
							<span>AC & Heating</span>
						</div>
					</li>
					<li className="listing_amenities-list_item">
						<div>
							<i className="fa fa-check"></i>
							<span>AC & Heating</span>
						</div>
					</li>
					<li className="listing_amenities-list_item">
						<div>
							<i className="fa fa-check"></i>
							<span>AC & Heating</span>
						</div>
					</li>
					<li className="listing_amenities-list_item">
						<div>
							<i className="fa fa-times"></i>
							<span className="not_provided">AC & Heating</span>
						</div>
					</li>
					<li className="listing_amenities-list_item">
						<div>
							<i className="fa fa-times"></i>
							<span className="not_provided">AC & Heating</span>
						</div>
					</li>
					<li className="listing_amenities-list_item">
						<div>
							<i className="fa fa-check"></i>
							<span>AC & Heating</span>
						</div>
					</li>
				</ul>
			</div>

			<div className="listing_description well">
				<h4 className="listing_subtitle">Description:</h4><hr className="hr"/>
				{listing && listing.description}
			</div>

			<div className="listing_description well">
				<h4 className="listing_subtitle">Map:</h4><hr className="hr"/>
				
			</div>
		</div>
  );
};

ListingInfo.displayName = 'ListingInfo';

export default ListingInfo;