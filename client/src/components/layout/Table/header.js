import React from 'react';

const Header = ({ headers }) => {
  
  return (
    <thead>
      <tr>
        {headers && headers.map((title, i) =>{
        	return <th key={i} className="text-capitalize">{title}</th>
        })}
        <th>Action</th>
      </tr>

    </thead>  
  );
};

Header.displayName = 'TableHeader';

export default Header;