import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import AdminSidebar from "../../layout/Sidebar/adminSidebar";
import UserSidebar from "../../layout/Sidebar/userSidebar";
import Panel from "../../layout/Panel";
import Table from "../../layout/Table";
import { getAllListings } from "../../../actions/adminAction";
import { truncateText } from "../../../helpers";

const ManageListings = ({ currentuser: {isAuthenticated, info}, getAllListings, listings }) => {
	useEffect(() =>{
		if(info.isadmin){
			getAllListings();
		};
	}, [getAllListings]);
	
	if(!isAuthenticated){
		return <Redirect to="/login" />;
	};

	const tableRowData = Object.values(listings.all).map((listing, i) =>{
		return (
			<tr key={i}>
				<td>{i+1}</td>
				<td className="text-capitalize">{truncateText(listing.location.address, 18)}</td>
				<td className="text-capitalize">{listing.formatAddress.country}</td>
				<td className="text-capitalize">{listing.propertyType}</td>
				<td className="text-capitalize">{listing.listingType}</td>
				<td className="text-uppercase">{listing.isActive ? "Published" : "Pending"}</td>
				<td>
					<Link to={`/properties/${listing.id}`} className="actionBtn"><i className="fa fa-eye"></i></Link>
					<Link to={`/admin/properties/edit/${listing.id}`} className="actionBtn"><i className="fa fa-pencil"></i></Link>
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
						{
							info.isadmin ? <AdminSidebar user={info}/> : <UserSidebar user={info} />
						}
					</SidebarWrapper>
				</div>
				
				<div className="col-sm-8 col-md-9">
					<Panel title="Manage Lisitngs">
						<Table>
							<thead>
								<tr>
									<th>#</th>
					        <th>Address</th>
					        <th>Country</th>
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