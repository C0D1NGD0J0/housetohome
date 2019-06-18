import React from 'react';

const NearByLsiting = ({ className }) => {
  return (
    <div className="sidebar_box nearby_listings">
			<h4>Other Vacations Listings</h4><hr/>
			<ul className="nearby_listings-list">
				<li className="media">
					<div className="pull-left">
						<img src="dist/img/house_1.jpg" alt="" className="img-responsive" width="65px"/>
					</div>

					<div className="media-body">
						<h4 className="media-heading">1600 Pennsylvania Ave NW</h4>
						<p><span>3Bed</span> | <span>2Bath</span> | <span>$2,3900,000</span></p>
					</div>
				</li>
				<li className="media">
					<div className="pull-left">
						<img src="dist/img/house_1.jpg" alt="" className="img-responsive" width="65px"/>
					</div>

					<div className="media-body">
						<h4 className="media-heading">1600 Pennsylvania Ave NW</h4>
						<p><span>3Bed</span> | <span>2Bath</span> | <span>$2,3900,000</span></p>
					</div>
				</li>
				<li className="media">
					<div className="pull-left">
						<img src="dist/img/house_1.jpg" alt="" className="img-responsive" width="65px"/>
					</div>

					<div className="media-body">
						<h4 className="media-heading">1600 Pennsylvania Ave NW</h4>
						<p><span>3Bed</span> | <span>2Bath</span> | <span>$2,3900,000</span></p>
					</div>
				</li>
				<li className="media">
					<div className="pull-left">
						<img src="dist/img/house_1.jpg" alt="" className="img-responsive" width="65px"/>
					</div>

					<div className="media-body">
						<a href="#!"><h4 className="media-heading">1600 Pennsylvania Ave NW</h4></a>
						<p><span>3Bed</span> | <span>2Bath</span> | <span>$2,3900,000</span></p>
					</div>
				</li>
			</ul>
		</div>  
  );
};

NearByLsiting.displayName = 'NearByLsiting';

export default NearByLsiting;