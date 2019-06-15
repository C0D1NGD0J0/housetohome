import React from 'react';

const FormNavbar = ({ navItems, updateCurrentStep }) => {
	const style = {
		borderRadius: "0",
		fontSize: "1.2rem",
		textTransform: "uppercase"
	};
	
	const navitem = navItems.map((title, i) =>{
		return(
			<li style={{cursor: "pointer"}}><span onClick={() => updateCurrentStep(i + 1)}>{title}</span></li>
		);
	});

  return (
    <ol className="breadcrumb" style={style}>
		  {navitem}
		</ol>  
  );
};

FormNavbar.displayName = 'FormNavbar';

export default FormNavbar;