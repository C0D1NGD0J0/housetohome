import React, { PropTypes } from 'react';
import { NavLink } from "react-router-dom";

const UserSidebar = ({ className }) => {
  return (
  	<div className="sidebar_box">
			<h4>User Dashboard</h4><hr/>

			<ul className="sidebar_menu">
				<li><NavLink activeClassName="active" to="#!"><i className="fa fa-user"></i> My Reservations</NavLink></li>
				<li><NavLink activeClassName="active" to="/account_update"><i className="fa fa-pencil"></i> Update Account</NavLink></li>
				<li><NavLink activeClassName="active" to="#!"><i className="fa fa-credit-card"></i> Billing</NavLink></li>
				<li><NavLink activeClassName="active" to="#!"><i className="fa fa-envelope"></i> Mail</NavLink></li>
			</ul>
		</div>
  );
};

UserSidebar.displayName = 'UserSidebar';

export default UserSidebar;