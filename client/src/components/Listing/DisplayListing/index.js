import React, { Component } from 'react';
import { connect } from "react-redux";
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import ListingInfo from "./listingInfo";
import { getListingAction } from "../../../actions/listingAction";
import Reservation from "../../layout/Sidebar/bookingSidebar";
import PropertyAgentInfo from "../../layout/Sidebar/handlerSidebar";
import NearByListings from "../../layout/Sidebar/nearByListingsSidebar";

class Listing extends Component {
  constructor(props) {
  	super(props);
  }
	
	componentDidMount(){
		const { id } = this.props.match.params;
		if(id !== "") return this.props.getListingAction(id);
	}

  render() {
		const { listing } = this.props;

    return(
			<ContentWrapper containerClass="container">
				<div id="listing-page">
					<div className="row">
						<div className="col-sm-8 col-md-9">
							<ListingInfo listing={listing}/>
						</div>

						<div className="col-sm-4 col-md-3">
							<SidebarWrapper>
								<Reservation />
								<PropertyAgentInfo handler={listing && listing.handler} />
								<NearByListings />
							</SidebarWrapper>
						</div>
					</div>
				</div>
			</ContentWrapper>
    );
  };
}

const mapStateToProps = state =>({
	listing: state.listings.show
});

const mapDispatchToProps = {
	getListingAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);