import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";

const UserSidebar = ({ user }) => {
	if(!user) return null;
	
  return (
  	<div className="sidebar_box">
			<NavLink activeClassName="active" to="/dashboard"><h4>User Dashboard</h4></NavLink><hr/>

			<ul className="sidebar_menu">
				<li><NavLink activeClassName="active" to="#!"><i className="fa fa-user"></i> My Reservations</NavLink></li>
				<li><NavLink activeClassName="active" to="/account_update"><i className="fa fa-pencil"></i> Update Account</NavLink></li>
				{
					user.role === "employee" && !user.isadmin ?
						<Fragment>
							<li><NavLink exact activeClassName="active" to="/admin/properties/new"><i className="fa fa-plus"></i> New Listings</NavLink></li>
							<li><NavLink exact activeClassName="active" to="/admin/properties"><i className="fa fa-cogs"></i> Listings</NavLink></li>
						</Fragment> : null
				}
				<li><NavLink exact activeClassName="active" to="#!"><i className="fa fa-home"></i> Saved Listings</NavLink></li>
				<li><NavLink activeClassName="active" to="#!"><i className="fa fa-credit-card"></i> Billing</NavLink></li>
				<li><NavLink activeClassName="active" to="#!"><i className="fa fa-envelope"></i> Mail</NavLink></li>
			</ul>
		</div>
  );
};

UserSidebar.displayName = 'UserSidebar';

export default UserSidebar;