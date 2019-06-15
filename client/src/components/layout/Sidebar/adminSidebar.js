import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";

const AdminSidebar = ({ user }) => {
	if(!user) return null;

  return (
  	<div className="sidebar_box">
			<NavLink activeClassName="active" to="/admin/dashboard"><h4>{user.role.isAdmin ? "Admin Dashboard" : "Employee Dashboard"}</h4></NavLink><hr/>

			<ul className="sidebar_menu">
				{
					user.role.isAdmin ? 
					<Fragment>
						<li><NavLink activeClassName="active" to="/admin/new_employee"><i className="fa fa-user"></i> Add New Employee</NavLink></li>
						
						<li><NavLink activeClassName="active" to="/admin/manage_users"><i className="fa fa-cog"></i> Manage Users</NavLink></li>

						<li><NavLink activeClassName="active" to="/admin/new_listing"><i className="fa fa-plus"></i> New Listings</NavLink></li>

						<li><NavLink activeClassName="active" to="/admin/manage_listings"><i className="fa fa-cogs"></i> Listings</NavLink></li>

						<li><NavLink activeClassName="active" to="#!"><i className="fa fa-home"></i> Viewings</NavLink></li>

						<li><NavLink activeClassName="active" to="#!"><i className="fa fa-envelope"></i> Mail</NavLink></li>
						
						<li><NavLink activeClassName="active" to="/admin/manage_billing"><i className="fa fa-credit-card"></i> Billing</NavLink></li>
					</Fragment> : 

					<Fragment>
						<li><NavLink activeClassName="active" to="/admin/new_listing"><i className="fa fa-plus"></i> New Listings</NavLink></li>

						<li><NavLink activeClassName="active" to="/admin/manage_listings"><i className="fa fa-cogs"></i> Listings</NavLink></li>

						<li><NavLink activeClassName="active" to="#!"><i className="fa fa-home"></i> Viewings</NavLink></li>

						<li><NavLink activeClassName="active" to="#!"><i className="fa fa-envelope"></i> Mail</NavLink></li>
					</Fragment>
				}
			</ul>
		</div>  
  );
};

AdminSidebar.displayName = 'AdminSidebar';


export default AdminSidebar;