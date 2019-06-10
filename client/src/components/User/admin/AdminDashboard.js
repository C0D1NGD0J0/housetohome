import React, { Component } from 'react';
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import AdminSidebar from "../../layout/Sidebar/adminSidebar";
import Panel from "../../layout/Panel";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Table from "../../layout/Table";

class AdminDashboard extends Component {
	componentDidMount(){
		if(!this.props.user || this.props.user.info && this.props.user.info.role.isGuest){
			return this.props.history.push('/dashboard');
		}
	}

	render() {
		return (
			<ContentWrapper containerClass="container">
				<div className="row">
					<div className="col-sm-4 col-md-3">
						<SidebarWrapper>
							<AdminSidebar />
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
							
							</Panel>
						</div>

						<div className="col-sm-4 newListings-panel">
							<Panel title="Pending Reservations">
							
							</Panel>
						</div>

						<div className="col-sm-6 newListings-panel">
							<Panel title="Recently Signedup Users">
							
							</Panel>
						</div>
					</div>
				</div>
			</ContentWrapper>
		);
	}
};

const mapStateToProps = state =>({
	user: state.user
});

export default connect(mapStateToProps)(AdminDashboard);