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
  		filteredListings: []
  	};
  }
	
	componentDidMount(){
		this.props.getListingsAction();
	}
	
	onInputChange = (e) =>{
		const { name, value } = e.target;

		this.setState({ [name]: value }, () =>{
			this.filteredData();
		});
	}

	filteredData = () =>{
		const listings = Object.values(this.props.listings);
		const data = listings.filter((listing) =>{
			return listing.listingType === this.state.listingType
		});

		this.setState({ filteredListings: [...data] });
	}

  render() {
  	const listings = Object.values(this.props.listings);
		const { filteredListings } = this.state;

  	return (
    	<ContentWrapper containerClass="container">
				<div id="listing-page">
					<div className="row">
						<div className="col-sm-4 col-md-3">
							<SidebarWrapper>
								<Filter value={this.state} onchange={this.onInputChange}/>
							</SidebarWrapper>
						</div>

						<div className="col-sm-8 col-md-9">
							<div id="properties">
								<SearchField value={this.state.search} onchange={this.onInputChange}/>
							
								<div className="row properties-list">
									{/*<Listings listings={filteredListings.length === 0 ? listings : filteredListings}/>*/}
									<Listings listings={filteredListings}/>
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