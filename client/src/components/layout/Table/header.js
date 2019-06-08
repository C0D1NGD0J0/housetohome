import React, { PropTypes } from 'react';

const Header = ({ headerTitles }) => {
  return (
    <thead>
      <tr>
        {headerTitles.map((title, i) =>{
        	return <th key={i}>{title.toUpperCase()}</th>
        })}
      </tr>
    </thead>  
  );
};

Header.displayName = 'TableHeader';

export default Header;