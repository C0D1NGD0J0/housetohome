import React, { Component } from 'react';
import { connect } from "react-redux";
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import ListingInfo from "./listingInfo";
import { getListingAction } from "../../../actions/listingAction";
import ReservationSB from "../../layout/Sidebar/bookingSidebar";
import PropertyAgentInfoSB from "../../layout/Sidebar/handlerSidebar";
import NearByListingsSB from "../../layout/Sidebar/nearByListingsSidebar";

class Listing extends Component {
  componentDidMount(){
		const { id } = this.props.match.params;
		if(id !== "") return this.props.getListingAction(id);
	}

	componentDidUpdate(prevProps, prevState){
		const { id: oldListing } = prevProps.match.params;
		const { id: newListing } = this.props.match.params;

		if (oldListing !== newListing) {
			return this.props.getListingAction(newListing);
		}
	}

  render() {
		const { listing } = this.props;
		
    return(
			<ContentWrapper containerClass="container">
				<div id="listing-page">
					<div className="row">
						<div className="col-sm-8 col-md-9">
							<ListingInfo listing={listing && listing.property}/>
						</div>

						<div className="col-sm-4 col-md-3">
							<SidebarWrapper>
								<ReservationSB />
								<PropertyAgentInfoSB handler={listing && listing.property && listing.property.handler} />
								<NearByListingsSB listings={listing && listing.nearByProperties} listingId={this.props.match.params.id}/>
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