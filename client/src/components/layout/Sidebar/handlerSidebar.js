import React from 'react';

const AgentSidebar = ({ handler }) => {

  return (
  	<div className="sidebar_box contact_box">
			<h4>Inquire about Proeprty</h4><hr />
			<ul className="sidebar_menu contact_box-info">
			  <li><i className="fa fa-user"></i> Agent: <span className="text-capitalize">{handler && handler.fullname}</span></li>
			  <li><i className="fa fa-phone"></i> Phone: <span>{handler && handler.phone}</span></li>
			  <li><i className="fa fa-envelope"></i> Email: <span>{handler && handler.email}</span></li>
			  <li>Property ID: <span className="label label-primary">#12349</span></li>
			</ul>
		</div>
  );
};

AgentSidebar.displayName = 'AgentSidebar';

export default AgentSidebar;