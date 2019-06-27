import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const MapWrapper = (props) => {
	const { listingLocation: listing } = props;

	const mapStyle = {
		width: '100',
		height: "100%"
	};

  return (
  	<Map 
  		google={props.google} 
  		zoom={14} 
  		style={mapStyle} 
  		initialCenter={{lat: listing.coordinates[0], lng: listing.coordinates[1]}} 
  	>
			<Marker position={{lat: listing.coordinates[0], lng: listing.coordinates[1]}} />
  	</Map>
  );
};

MapWrapper.displayName = 'MapWrapper';

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_APIKEY })(MapWrapper);