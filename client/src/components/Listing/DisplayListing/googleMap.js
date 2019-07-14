import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapWrapper extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

	render(){
    const { listingLocation: listing } = this.props;
    const mapStyle = {
      width: '100',
      height: "100%"
    };

    return (
    	<Map 
    		google={this.props.google} 
    		zoom={14} 
        key={listing.address}
    		style={mapStyle} 
    		initialCenter={{lat: listing && listing.coordinates[1], lng: listing && listing.coordinates[0]}} 
    	>
  			<Marker position={{lat: listing && listing.coordinates[1], lng: listing && listing.coordinates[0]}} />
    	</Map>
    );
  }
};

MapWrapper.displayName = 'MapWrapper';

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_APIKEY })(MapWrapper);