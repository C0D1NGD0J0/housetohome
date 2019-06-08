import React from 'react';
import { Link } from "react-router-dom";

const AdminSidebar = ({ className }) => {
  return (
  	<div className="sidebar_box">
			<h4>Admin Dashboard</h4><hr/>

			<ul className="sidebar_menu">
				<li><Link to="/admin/add_new_employee"><i className="fa fa-user"></i> Add New Employee</Link></li>
				<li><Link to="/new_listing"><i className="fa fa-plus"></i> New Listings</Link></li>
				<li><Link to="/admin/listings"><i className="fa fa-cogs"></i> Manage Listings</Link></li>
				<li><Link to="#!"><i className="fa fa-credit-card"></i> Billing</Link></li>
				<li><Link to="/admin/users"><i className="fa fa-cog"></i> Manage Users</Link></li>
				<li><Link to="#!"><i className="fa fa-envelope"></i> Mail</Link></li>
			</ul>
		</div>  
  );
};

AdminSidebar.displayName = 'AdminSidebar';


export default AdminSidebar;