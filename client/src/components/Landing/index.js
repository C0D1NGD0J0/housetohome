import React, { Component } from 'react';
import axios from "axios";
import HeroSection from "./banner";
import Services from "./services";
import AboutUs from "./about";
import FeaturedProperty from "./featured";
import Cities from "./cities";
import Contact from "./contact";
import Header from "./Header";

class HomePage extends Component {
	constructor(props){
		super(props);
		this.state = {
			properties: []
		};
	}

	async componentDidMount(){
		const res = await axios.get("/api/properties/homepage");
		this.setState({properties: [...res.data]});
	}

	render() {
		const propertyTypes = [{name: "Rental", icon: 'key'}, {name: "Commercial", icon: "building-o"}, {name: "Vacation Homes", icon:"plane"}, {name: "Buy & Sell", icon: "dollar"}];

		return (
			<div className="landing">
				<Header />
				<HeroSection />
				<Services propertyTypes={propertyTypes}/>
				<FeaturedProperty properties={this.state.properties} />
				<AboutUs />
				<Cities />
				<Contact />
			</div>
		);
	}
};


export default HomePage;