import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import AdminSidebar from "../../layout/Sidebar/adminSidebar";
import Panel from "../../layout/Panel";
import Table from "../../layout/Table";
// import { } from "../../../actions/userAction";

const ManageUsers = (props) => {
  return (
  	<ContentWrapper containerClass="container">
			<div className="row">
				<div className="col-sm-4 col-md-3">
					<SidebarWrapper>
						<AdminSidebar />
					</SidebarWrapper>
				</div>
				
				<div className="col-sm-8 col-md-9">
					<Panel title="Manage Users">
						<Table resource={[{name: "tony", age: 14},  {name: "mike", age: 50}]}/>	
					</Panel>
				</div>
			</div>
		</ContentWrapper>
  );
};

ManageUsers.displayName = 'ManageUsers';

const mapStateToProps = state =>({

});

export default connect(mapStateToProps)(ManageUsers);