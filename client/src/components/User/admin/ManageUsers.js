import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import AdminSidebar from "../../layout/Sidebar/adminSidebar";
import Panel from "../../layout/Panel";
import Table from "../../layout/Table";
import { getAllUsers } from "../../../actions/adminAction";

class ManageUsers extends Component {
  constructor(props) {
  	super(props);
  }
	
	componentDidMount(){
		this.props.getAllUsers();
	}

  render() {
  	const { all } = this.props.users;
		const tableRowData = all.map((user, i) =>{
			return (
				<tr key={i}>
					<td>{i+1}</td>
					<td>{user.firstName}</td>
					<td>{user.lastName}</td>
					<td>{user.email}</td>
					<td>{user.phone}</td>
					<td>{Object.keys(user.role)}</td>
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
							<AdminSidebar />
						</SidebarWrapper>
					</div>
					
					<div className="col-sm-8 col-md-9">
						<Panel title="Manage Users">
							<Table>
								<thead>
									<tr>
										<th>#</th>
										<th>First Name</th>
										<th>Last Name</th>
										<th>Email</th>
										<th>Phone</th>
										<th>Role</th>
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
  }
}

ManageUsers.displayName = 'ManageUsers';

const mapStateToProps = state =>({
	currentuser: state.user,
	users: state.admin.users
});

const mapDispatchToProps = {
	getAllUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);