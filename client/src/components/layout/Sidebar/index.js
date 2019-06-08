import React from 'react';

const Sidebar = (props) => {
  return (
  	<aside className="sidebar">
			{props.children}
		</aside>
  );
};

Sidebar.displayName = 'Sidebar';


export default Sidebar;