import React, { useEffect } from 'react';
import { connect } from "react-redux";
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import AdminSidebar from "../../layout/Sidebar/adminSidebar";
import Panel from "../../layout/Panel";
import Table from "../../layout/Table";
import { getAllListings } from "../../../actions/adminAction";

const ManageListings = ({ currentuser, getAllListings, listings }) => {
	const { info } = currentuser;
	
	useEffect(() =>{
		getAllListings();
	}, [getAllListings]);
	
	const tableRowData = Object.values(listings.all).map((listing, i) =>{
		return (
			<tr key={i}>
				<td>{i+1}</td>
				<td className="text-capitalize">{listing.location.address}</td>
				<td className="text-capitalize">{listing.propertyType}</td>
				<td className="text-capitalize">{listing.listingType}</td>
				<td>{listing.isActive ? "Published" : "Pending"}</td>
				<td>
					<span className="actionBtn"><i className="fa fa-eye"></i></span>
					<span className="actionBtn"><i className="fa fa-pencil"></i></span>
					<span className="actionBtn"><i className="fa fa-trash"></i></span>
				</td>
			</tr> 
		)
	});
	
  return (
  	<ContentWrapper containerClass="container">
			<div className="row">
				<div className="col-sm-4 col-md-3">
					<SidebarWrapper>
						<AdminSidebar user={info}/>
					</SidebarWrapper>
				</div>
				
				<div className="col-sm-8 col-md-9">
					<Panel title="Manage Lisitngs">
						<Table>
							<thead>
								<tr>
									<th>#</th>
					        <th>Location</th>
					        <th>Property Type</th>
					        <th>Listing Type</th>
					        <th>Status</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{tableRowData}
							</tbody>
						</Table>
					</Panel>
				</div>
			</div>
		</ContentWrapper>
  );
};

ManageListings.displayName = 'ManageListings';

const mapStateToProps = state =>({
	currentuser: state.user,
	listings: state.admin.listings
});

export default connect(mapStateToProps, { getAllListings })(ManageListings);