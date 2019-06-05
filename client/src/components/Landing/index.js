import React, { Component } from 'react';
import HeroSection from "./banner";
import Services from "./services";
import AboutUs from "./about";
import FeaturedProperty from "./featured";
import Cities from "./cities";
import Contact from "./contact";
import Header from "./Header";

class HomePage extends Component {
	render() {
		const propertyTypes = [{name: "Rental", icon: 'key'}, {name: "Commercial", icon: "building-o"}, {name: "Vacation Homes", icon:"plane"}, {name: "Buy & Sell", icon: "dollar"}];

		return (
			<div className="landing">
				<Header />
				<HeroSection />
				<Services propertyTypes={propertyTypes}/>
				<FeaturedProperty />
				<AboutUs />
				<Cities />
				<Contact />
			</div>
		);
	}
};


export default HomePage;