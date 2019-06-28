import React, { Component } from 'react';
import ListingCard from "./ListingCard";

class Listings extends Component {
  constructor(props) {
  	super(props);
  }

  render(){
  	const listings = Object.values(this.props.listings);
  	
  	if(listings === 'undefined' || listings.length === 0){
  		return "No listings match your filtered parameters.."
  	}

  	return (
    	listings.map((listing, i) =>{
				return <ListingCard listing={listing} key={i}/>
  		})  
    );
  }
}

export default Listings;