import React from 'react';
import room_1 from "../../assets/img/room-1.jpeg";
import room_2 from "../../assets/img/room-2.jpeg";
import room_3 from "../../assets/img/room-3.jpeg";
import room_4 from "../../assets/img/room-4.jpeg";

const Cities = (props) => {
  return (
    <section id="cities" className="grey-bg cities">
			<div className="container">
				<div className="section-title">
					<h2>Top Vacation Cities</h2><hr/><br/>
				</div>

				<div className="row">
					<div className="cities_wrapper">
						<div className="col-xs-6 col-sm-3">
							<div className="cities_item">
								<div className="cities_item-img">
									<img src={room_1} className="img-responsive" alt="city-image" />
								</div>
								<div className="cities_item-overlay">
									<div className="cities_item-content">
										<h1>Toronto</h1><hr/>
										<span>Canada</span>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xs-6 col-sm-3">
							<div className="cities_item">
								<div className="cities_item-img">
									<img src={room_2} className="img-responsive" alt="city-image" />
								</div>
								<div className="cities_item-overlay">
									<div className="cities_item-content">
										<h1>New York</h1><hr/>
										<span>U.S.A</span>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xs-6 col-sm-3">
							<div className="cities_item">
								<div className="cities_item-img">
									<img src={room_3} className="img-responsive" alt="city-image" />
								</div>
								<div className="cities_item-overlay">
									<div className="cities_item-content">
										<h1>London</h1><hr/>
										<span>U.K</span>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xs-6 col-sm-3">
							<div className="cities_item">
								<div className="cities_item-img">
									<img src={room_4} className="img-responsive" alt="city-image" />
								</div>
								<div className="cities_item-overlay">
									<div className="cities_item-content">
										<h1>Nairobi</h1><hr/>
										<span>Kenya</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
};

Cities.displayName = 'Cities';

export default Cities;