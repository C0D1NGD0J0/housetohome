import React, { Component } from 'react';
import { connect } from "react-redux";
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import Filter from "./FilterSidebar";
import Pagination from "../../layout/Pagination";
import { getListingsAction } from "../../../actions/listingAction";
import spriteSVG from "../../../assets/img/sprite.svg";
import SearchField from "./SearchField";
import Listings from "./Listings";

class ListingsIndex extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		listingType: "",
  		propertyType: "",
  		price: 0,
  		size: 0,
  		bedroom: "",
  		search: "",
  		filteredListings: [],
  		hasFiltered: false,
  	};
  }
	
	componentDidMount(){
		this.props.getListingsAction();
	}
	
	onInputChange = (e) =>{
		const { name, value } = e.target;

		this.setState({ [name]: value }, () =>{
			this.filteredData();
			if(name === "search"){
				this.searchData();
			}
		});
	}	
	
	resetFilter = () =>{
		this.setState({
			hasFiltered: false,
			listingType: "",
  		propertyType: "",
  		price: 0,
  		size: 0,
  		bedroom: "",
  		search: "",
  		filteredListings: [],
		})
	}

	filteredData = () =>{
		const listings = Object.values(this.props.listings);
		const filters = ["listingType","propertyType","price","size","bedroom"];
		let data = listings;

		filters.forEach((type) => {
			if(this.state[type]){
				data = data.filter((listing) =>{
					switch (type) {
						case "price":
							return listing[type] <= this.state[type];
						case "size":
							return listing[type] <= this.state[type]			
						case "bedroom":
							return listing.features[type] <= this.state[type]
						default:
							return listing[type] === this.state[type]
					}
				});
			};
		});

		this.setState({ filteredListings: [...data], hasFiltered: true });
	}

	searchData = () =>{
		const listings = Object.values(this.props.listings);
		const { search, hasFiltered, filteredListings } = this.state;
		let data = (!hasFiltered || search.length === 0) ? listings : filteredListings;
		
		data = data.filter((listing) =>{
			return listing.location.address.toLowerCase().match(search.toLowerCase());
		});
		
		this.setState({ filteredListings: [...data], hasFiltered: true });
	}

  render() {
  	const listings = Object.values(this.props.listings);
		const { filteredListings, hasFiltered } = this.state;

  	return (
    	<ContentWrapper containerClass="container">
				<div id="listing-page">
					<div className="row">
						<div className="col-sm-4 col-md-3">
							<SidebarWrapper>
								<Filter value={this.state} onchange={this.onInputChange} resetFilter={this.resetFilter}/>
							</SidebarWrapper>
						</div>

						<div className="col-sm-8 col-md-9">
							<div id="properties">
								<SearchField value={this.state.search} onchange={this.onInputChange}/>
							
								<div className="row properties-list">
									<Listings listings={!hasFiltered ? listings : filteredListings}/>
								</div>
							</div>
						</div>
					</div>

					<Pagination />
				</div>
			</ContentWrapper>
    );
  }
}

const mapStateToProps = state =>({
	listings: state.listings.all
});

export default connect(mapStateToProps, { getListingsAction })(ListingsIndex);