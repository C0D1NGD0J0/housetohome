import React from 'react';
import { NavLink } from "react-router-dom";

const AdminSidebar = ({ className }) => {
  return (
  	<div className="sidebar_box">
			<h4>Admin Dashboard</h4><hr/>

			<ul className="sidebar_menu">
				<li><NavLink activeClassName="active" to="/admin/new_employee"><i className="fa fa-user"></i> Add New Employee</NavLink></li>
				<li><NavLink activeClassName="active" to="/new_listing"><i className="fa fa-plus"></i> New Listings</NavLink></li>
				<li><NavLink activeClassName="active" to="/admin/manage_listings"><i className="fa fa-cogs"></i> Listings</NavLink></li>
				<li><NavLink activeClassName="active" to="/admin/manage_users"><i className="fa fa-cog"></i> Users</NavLink></li>
				<li><NavLink activeClassName="active" to="/admin/manage_billing"><i className="fa fa-credit-card"></i> Billing</NavLink></li>
				<li><NavLink activeClassName="active" to="#!"><i className="fa fa-envelope"></i> Mail</NavLink></li>
			</ul>
		</div>  
  );
};

AdminSidebar.displayName = 'AdminSidebar';


export default AdminSidebar;