import React, { Component } from 'react';
import ListingCard from "./ListingCard";

class Listings extends Component {
  render(){
  	const listings = Object.values(this.props.listings);
  	
  	if(listings === 'undefined' || listings.length === 0){
  		return "No listings match your filtered parameters.."
  	}

  	return (
    	listings.map((listing, i) =>{
				return(
          <div className="col-xs-6 col-sm-6 col-md-4">
            <ListingCard listing={listing} key={i}/>
          </div>
        );
  		})  
    );
  }
}

export default Listings;