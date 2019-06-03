import React from 'react';

const Contact = (props) => {
  return (
  	<section id="contact" className="white-bg contact">
			<div className="container">
				<div className="row">
					<div className="col-sm-9">
						<div className="contact_form">
							<div className="section-title">
								<h2>Contact Us</h2><hr/>
							</div>

							<form action="#" className="form">
								<div className="row">
									<div className="col-sm-6">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Enter Your Name"/>
										</div>
									</div>

									<div className="col-sm-6">
										<div className="form-group">
											<input type="email" className="form-control" placeholder="Enter Email Address"/>
										</div>
									</div>

									<div className="col-sm-12">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Enter Subject"/>
										</div>
									</div>

									<div className="col-sm-12">
										<div className="form-group">
											<textarea name="message" placeholder="Message..." rows="5" className="form-control"></textarea>
										</div>
									</div>
									
									<div className="col-sm-12">
										<button type="submit" className="btn btn-green_ghost">
											Send Message <i className="fa fa-paper-plane-o fa-1x"></i>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>

					<div className="col-xs-3 col-sm-3">
						<div className="contact_offices">
							<div className="contact_offices-item">
								<h4>Canada</h4><hr/>
								<ul className="office_details">
									<li><i className="fa fa-mobile"></i> (55) 12 178 2345</li>
									<li><i className="fa fa-envelope"></i> info@example.com</li>
									<li><i className="fa fa-map-marker"></i> <span>524 Main Street Building 05<br/>NewYork, USA.</span></li>
								</ul>
							</div>

							<div className="contact_offices-item">
								<h4>United States</h4><hr/>
								<ul className="office_details">
									<li><i className="fa fa-mobile"></i> (55) 12 178 2345</li>
									<li><i className="fa fa-envelope"></i> info@example.com</li>
									<li><i className="fa fa-map-marker"></i> <span>524 Main Street Building 05<br/>NewYork, USA.</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
};

Contact.displayName = 'Contact';

export default Contact;