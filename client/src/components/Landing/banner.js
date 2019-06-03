import React from 'react';

const HeroSection = (props) => {
  return (
    <section id="home" className="home">
			<div className="home_cover">
				<div className="home_content">
					<div className="home_content-heading">
						<h1>Find your place <span className='green-text'>with our local</span> life style.</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni qui magnam, perferendis non minus ipsa.</p>
					</div>
					
					<div className="home_content-btn text-center">
						<a href="properties.html" className="btn btn-green">View Property Listings</a>
					</div>
				</div>
			</div>
		</section>
  );
};

HeroSection.displayName = 'HeroSection';

export default HeroSection;