import React, { Component } from 'react';
import ContentWrapper from "../layout/ContentWrapper";
import SidebarWrapper from "../layout/Sidebar";
import UserSidebar from "../layout/Sidebar/userSidebar";
import Panel from "../layout/Panel";
import { connect } from "react-redux";
import Table from "../layout/Table";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
	componentDidMount(){
		// if(!this.props.auth.isAuthenticated) return <Redirect to="/login" /> notworking
	}

	render() {
		return (
			<ContentWrapper containerClass="container-fluid">
				<div className="row">
					<div className="col-xs-4 col-sm-3">
						<SidebarWrapper>
							<UserSidebar />
						</SidebarWrapper>
					</div>

					<div className="col-xs-8 col-sm-9">
						<div className="col-sm-12">
							<Panel title="Pending Reservation">
								
							</Panel>
						</div>

						<div className="col-sm-6">
							<Panel title="Saved Listings">
							
							</Panel>
						</div>

						<div className="col-sm-6">
							<Panel title="Scheduled Viewing">
							
							</Panel>
						</div>
					</div>
				</div>
			</ContentWrapper>
		);
	}
};

const mapStateToProps = state =>({
	auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);