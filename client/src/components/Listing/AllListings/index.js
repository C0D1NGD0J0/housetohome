import React, { Component } from 'react';
import { connect } from "react-redux";
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import Filter from "./FilterSidebar";
import ListingCard from "./ListingCard";
import Pagination from "../../layout/Pagination";
import { getListingsAction } from "../../../actions/listingAction";
import spriteSVG from "../../../assets/img/sprite.svg";
import magnifyingGlassSVG from "../../../assets/img/svg/magnifying-glass.svg";

class Listings extends Component {
  constructor(props) {
  	super(props);
  	this.state = {};
  }
	
	componentDidMount(){
		this.props.getListingsAction();
	}

  render() {
  	const { listings } = this.props;
  	if(!listings) return null;

  	const displayListings = listings && Object.values(listings).map((listing, i) =>{
			return <ListingCard listing={listing} key={i}/>
  	});

    return (
    	<ContentWrapper containerClass="container">
				<div id="listing-page">
					<div className="row">
						<div className="col-sm-4 col-md-3">
							<SidebarWrapper>
								<Filter />
							</SidebarWrapper>
						</div>

						<div className="col-sm-8 col-md-9">
							<div id="properties">
								<div className="search">
									<input type="text" name="search" placeholder="Enter Country or City name" className="search_input" />
									<button className="search_btn">
										<img src={magnifyingGlassSVG} />
									</button>
								</div>

							
								<div className="properties-list">
									{displayListings}
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

export default connect(mapStateToProps, { getListingsAction })(Listings);