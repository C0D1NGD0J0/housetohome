import React from 'react';

const AboutUs = ({ className }) => {
  return (
    <section id="about" className="white-bg">
			<div className="container-fluid no-padding">
				<div className="row">
					<div className="col-sm-7">
						<div className="about">
							<div className="section-title" style={{textAlign: 'left'}}>
								<h2>About Us</h2><hr style={{margin: 0}}/>
							</div>

							<div className="about_details">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quasi magni deleniti esse velit eum, et cum earum temporibus ullam repellat fuga quo eligendi dolore eaque quae ipsum, vitae libero!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus debitis, accusamus laudantium hic aspernatur fuga.
								<a href="#" className="link-style" data-toggle="modal" data-target="#myModal">Read more...</a>
								</p>
							</div>
							
							<div className="about_services">
								<div className="col-sm-6">
									<div className="about_services-item">
										<div className="about_services-item_icon">
											<i className="fa fa-home"></i>
										</div>
										<div className="about_services-item_content">
											<h4>Property Management</h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, provident, repellat! Iusto quae distinctio beatae.</p>
										</div>
									</div>
								</div>

								<div className="col-sm-6">
									<div className="about_services-item">
										<div className="about_services-item_icon">
											<i className="fa fa-search"></i>
										</div>
										<div className="about_services-item_content">
											<h4>Property Search</h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, provident, repellat! Iusto quae distinctio beatae.</p>
										</div>
									</div>
								</div>
								
								<div className="clearfix"></div>

								<div className="col-sm-6">
									<div className="about_services-item">
										<div className="about_services-item_icon">
											<i className="fa fa-line-chart"></i>
										</div>
										<div className="about_services-item_content">
											<h4>Property Valuation</h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, provident, repellat! Iusto quae distinctio beatae.</p>
										</div>
									</div>
								</div>

								<div className="col-sm-6">
									<div className="about_services-item">
										<div className="about_services-item_icon">
											<i className="fa fa-money"></i>
										</div>
										<div className="about_services-item_content">
											<h4>Buy - Sell - Rent - Lease</h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, provident, repellat! Iusto quae distinctio beatae.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	

					<div className="col-sm-5">
						<div className="about_img"></div>
					</div>
				</div>
			</div>
		</section>  
  );
};

AboutUs.displayName = 'AboutUs';

export default AboutUs;