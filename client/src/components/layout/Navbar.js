import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
			  <div className="container">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <Link className="navbar-brand" to="/">HouseToHome</Link>
			    </div>
			    <div id="navbar" className="collapse navbar-collapse">
			      <ul className="nav navbar-nav navbar-right">
			        <li><Link to="/">Home</Link></li>
			        <li><Link to="#!">Listings</Link></li>
			        <li><Link to="#!">Reports</Link></li>
			        <li><Link to="#!">Tenants</Link></li>
			        <li><Link to="#!"><i className="fa fa-envelope"></i></Link></li>
			        <li className="dropdown">
			          <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></Link>
			          <ul className="dropdown-menu">
			            <li><Link to="#!">Dashboard</Link></li>
			            <li><Link to="#!">Update Details</Link></li>
			            <li><Link to="#!">Reports</Link></li>
			            <li><Link to="#!">Logout</Link></li>
			          </ul>
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>
		);
	}
};

export default Navbar;