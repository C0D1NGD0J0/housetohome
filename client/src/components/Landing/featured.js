import React from 'react';
import house_1 from "../../assets/img/house_1.jpg";
import house_2 from "../../assets/img/house_2.jpg";
import house_3 from "../../assets/img/house_3.jpg";
import house_4 from "../../assets/img/house_4.jpg";

const FeaturedProperty = (props) => {
  return (
  	<section id="featured-properties" className="grey-bg">
			<div className="container">
				<div className="section-title">
					<h2>Featured Listings</h2><hr/><br/>
				</div>

				<div className="row">
					<div className="col-xs-6 col-sm-6 col-md-3">
						<div className="property">
							<div className="property_img">
								<span className="property_type forsale">For Sale</span>
								<img src={house_1} alt="" className="img-responsive"/>
							</div>

							<div className="property_info">
								<div className="property_info-content">
									<a href="property.html"><h3>Home for sale</h3></a><hr/>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nisi eum possimus ducimus quas quod, laboriosam obcaecati veniam facilis impedit!</p>
									<ul className="property_info-content_amenities">
										<li><i className="fa fa-bathtub"></i> 4</li>
										<li><i className="fa fa-bed"></i> 3</li>
										<li><i className="fa fa-size"></i> 120sq ft</li>
										<li><i className="fa fa-calendar"></i> 2007</li>
									</ul>
								</div>
								<h4>$1400/month</h4>
							</div>
						</div>
					</div>

					<div className="col-xs-6 col-sm-6 col-md-3">
						<div className="property">
							<div className="property_img">
								<span className="property_type forsale">For Sale</span>
								<img src={house_2} alt="" className="img-responsive"/>
							</div>

							<div className="property_info">
								<div className="property_info-content">
									<a href="property.html"><h3>Home for sale</h3></a><hr/>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nisi eum possimus ducimus quas quod, laboriosam obcaecati veniam facilis impedit!</p>
									<ul className="property_info-content_amenities">
										<li><i className="fa fa-bathtub"></i> 4</li>
										<li><i className="fa fa-bed"></i> 3</li>
										<li><i className="fa fa-size"></i> 120sq ft</li>
										<li><i className="fa fa-calendar"></i> 2007</li>
									</ul>
								</div>
								<h4>$1400/month</h4>
							</div>
						</div>
					</div>

					<div className="col-xs-6 col-sm-6 col-md-3">
						<div className="property">
							<div className="property_img">
								<span className="property_type forsale">For Sale</span>
								<img src={house_4} alt="" className="img-responsive"/>
							</div>

							<div className="property_info">
								<div className="property_info-content">
									<a href="property.html"><h3>Home for sale</h3></a><hr/>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nisi eum possimus ducimus quas quod, laboriosam obcaecati veniam facilis impedit!</p>
									<ul className="property_info-content_amenities">
										<li><i className="fa fa-bathtub"></i> 4</li>
										<li><i className="fa fa-bed"></i> 3</li>
										<li><i className="fa fa-size"></i> 120sq ft</li>
										<li><i className="fa fa-calendar"></i> 2007</li>
									</ul>
								</div>
								<h4>$1400/month</h4>
							</div>
						</div>
					</div>

					<div className="col-xs-6 col-sm-6 col-md-3">
						<div className="property">
							<div className="property_img">
								<span className="property_type forsale">For Sale</span>
								<img src={house_3} alt="" className="img-responsive"/>
							</div>

							<div className="property_info">
								<div className="property_info-content">
									<a href="property.html"><h3>Home for sale</h3></a><hr/>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nisi eum possimus ducimus quas quod, laboriosam obcaecati veniam facilis impedit!</p>
									<ul className="property_info-content_amenities">
										<li><i className="fa fa-bathtub"></i> 4</li>
										<li><i className="fa fa-bed"></i> 3</li>
										<li><i className="fa fa-size"></i> 120sq ft</li>
										<li><i className="fa fa-calendar"></i> 2007</li>
									</ul>
								</div>
								<h4>$1400/month</h4>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-12 text-center">
						<br/><a href="listings.html" className="btn btn-green_ghost">View More Listings</a>
					</div>
				</div>
			</div>
		</section>
  );
};

FeaturedProperty.displayName = 'FeaturedProperty';

export default FeaturedProperty;