import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";

const AdminSidebar = ({ user }) => {
	if(!user) return null;

  return (
  	<div className="sidebar_box">
			<NavLink exact activeClassName="active" to="/admin/dashboard"><h4>{user.isadmin ? "Admin Dashboard" : "Employee Dashboard"}</h4></NavLink><hr/>

			<ul className="sidebar_menu">
				{
					user.isadmin ? 
					<Fragment>
						<li><NavLink exact activeClassName="active" to="/admin/employees/new"><i className="fa fa-user"></i> Add New Employee</NavLink></li>
						
						<li><NavLink exact activeClassName="active" to="/admin/manage_users"><i className="fa fa-cog"></i> Manage Users</NavLink></li>

						<li><NavLink exact activeClassName="active" to="/admin/properties/new"><i className="fa fa-plus"></i> New Listings</NavLink></li>

						<li><NavLink exact activeClassName="active" to="/admin/properties"><i className="fa fa-cogs"></i> Listings</NavLink></li>

						<li><NavLink exact activeClassName="active" to="#!"><i className="fa fa-home"></i> Viewings</NavLink></li>

						<li><NavLink exact activeClassName="active" to="#!"><i className="fa fa-envelope"></i> Mail</NavLink></li>
						
						<li><NavLink exact activeClassName="active" to="/admin/manage_billing"><i className="fa fa-credit-card"></i> Billing</NavLink></li>
					</Fragment> : null
				}
			</ul>
		</div>  
  );
};

AdminSidebar.displayName = 'AdminSidebar';


export default AdminSidebar;