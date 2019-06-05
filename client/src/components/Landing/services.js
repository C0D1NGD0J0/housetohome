import React from 'react';

const PropertyTypesSection = ({ propertyTypes }) => {
	const service = propertyTypes.map((type, i) =>{
		return(
			<div className={`service service_bgImg service_bgImg__${i+1}`} key={i}>
				<div className="service_item">
					<i className={`fa fa-${type.icon}`}></i>
					<h3>{type.name}</h3><hr/>
				</div>
			</div>
		);
	});

  return (
    <section id="services">
			<div className="container-fluid">
				<div className="row">
					<div className="services no-gutter">
						{service}
					</div>
				</div>
			</div>
		</section>  
  );
};


export default PropertyTypesSection;