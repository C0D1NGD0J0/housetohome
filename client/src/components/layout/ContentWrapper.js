import React from 'react';

const Wrapper = (props) => {
	const { mainClass, containerClass } = props;

  return (
   	<main id="wrapper" className={mainClass}>
			<div className={`container ${containerClass}`}>
				{props.children}
			</div>
		</main> 
  );
};

Wrapper.displayName = 'Wrapper';


export default Wrapper;