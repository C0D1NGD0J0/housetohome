import React, { PropTypes } from 'react';
import { Link } from "react-router-dom";

const UserSidebar = ({ className }) => {
  return (
  	<div className="sidebar_box">
			<h4>User Dashboard</h4><hr/>

			<ul className="sidebar_menu">
				<li><Link to="#!"><i className="fa fa-user"></i> My Reservations</Link></li>
				<li><Link to="/account/update"><i className="fa fa-pencil"></i> Update Account</Link></li>
				<li><Link to="#!"><i className="fa fa-credit-card"></i> Billing</Link></li>
				<li><Link to="#!"><i className="fa fa-envelope"></i> Mail</Link></li>
			</ul>
		</div>
  );
};

UserSidebar.displayName = 'UserSidebar';

export default UserSidebar;