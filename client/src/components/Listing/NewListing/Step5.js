import React, { Fragment } from 'react'

const StepFive = ({ currentStep, values, error }) => {
	if(currentStep !== 5) return null;
	let {description, address, longitude, latitude, handler, ...rest} = values;
	
	const displayErrors = error && Object.values(error).map((err, i) =>(<li key={i}>{err}</li>));
	const liTag = Object.keys(rest).map((key, i) =>{
		return (
			<li className="list-group-item" key={i}><b>{key}:</b> {`${rest[key]}`}</li>
		);
	});

  return (
		<div className="col-sm-12">
			<h3 className="page-header" style={{marginTop: "0"}}>Listing Details Review</h3>
			<div className="listing-info-overview">
				{
					Object.keys(error).length >= 1 ? displayErrors : 
						<Fragment>
							<ul className="list-group clearfix">
								{liTag}
							</ul>
							<p><span className="title">Description:</span> {description}</p>
							<p><span className="title">Address:</span> {address}</p>
							<p><b>Longitude:</b> {longitude} | <b>Latitude:</b> {latitude}</p>
						</Fragment>
				}
			</div>
		</div>
  );
};

StepFive.displayName = 'StepFive';

export default StepFive;