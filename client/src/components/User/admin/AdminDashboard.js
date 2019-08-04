import React, { Component } from 'react';
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import AdminSidebar from "../../layout/Sidebar/adminSidebar";
import Panel from "../../layout/Panel";
import Table from "../../layout/Table";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { truncateText } from "../../../helpers";
import axios from "axios";

class AdminDashboard extends Component {
	state = {
		users: [],
		newListings: [],
		listingsCount: []
	}

	async componentDidMount(){
		if(this.props.currentuser.info && !this.props.currentuser.info.isadmin){
			return this.props.history.push('/dashboard');
		}

		const res = await axios.get("/api/admin/dashboard");
		this.setState({users:[...res.data.newUsers], newListings: [...res.data.newListings], listingsCount: [...res.data.listingsCount]})
	}

	render() {
		const { currentuser: { info } } = this.props;
		const { users, newListings, listingsCount } = this.state;
		const newListingsRow = newListings && newListings.map((listing, i) =>{
			return (
				<tr key={i}>
					<td>{i+1}</td>
					<td>{truncateText(listing.location.address, 20)}</td>
					<td>{listing.propertyType.capitalize()}</td>
					<td>{listing.listingType.capitalize()}</td>
					<td>
						<Link to={`/properties/${listing.id}`} className="actionBtn"><i className="fa fa-eye"></i></Link>
					</td>
				</tr> 
			)
		});

		const newUsersRow = users && users.map((user, i) =>{
			return (
				<tr key={i}>
					<td>{user.fullname}</td>
					<td>{user.email}</td>
					<td>{user.role}</td>
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
						<div className="col-sm-12 overView-panel">
							<Panel title="Application Overview">
								<div className="col-sm-3">
									<div className="cardOverview">
										<a href="#">
											<i className="fa fa-users"></i> 40
											<h5>Active Tenants</h5>
										</a>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="cardOverview">
										<a href="#">
											<i className="fa fa-home"></i> 115
											<h5>Homes</h5>
										</a>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="cardOverview">
										<a href="#">
											<i className="fa fa-building-o"></i> 20
											<h5>Apartments Units</h5>
										</a>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="cardOverview bg-info">
										<a href="#">
											<i className="fa fa-book"></i> 15
											<h5>Reports</h5>
										</a>
									</div>
								</div>
							</Panel>
						</div>

						<div className="col-sm-8 newListings-panel">
							<Panel title="New Property Listings">
								<Table>
									<thead>
										<tr>
											<th>#</th>
											<th>Address</th>
											<th>Property Type</th>
											<th>Listing Type</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{newListingsRow}
									</tbody>
								</Table>
							</Panel>
						</div>

						<div className="col-sm-4 newListings-panel">
							<Panel title="Pending Reservations">
							
							</Panel>
						</div>

						<div className="col-sm-6 newListings-panel">
							<Panel title="Recently Signedup Users">
								<Table>
									<thead>
										<tr>
											<th>Full Name</th>
											<th>Email</th>
											<th>Role</th>
										</tr>
									</thead>
									<tbody>
										{newUsersRow}
									</tbody>
								</Table>
							</Panel>
						</div>
					</div>
				</div>
			</ContentWrapper>
		);
	}
};

const mapStateToProps = state =>({
	currentuser: state.user
});

export default connect(mapStateToProps)(AdminDashboard);