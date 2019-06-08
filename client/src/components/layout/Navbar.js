import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAction } from "../../actions/authAction";

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
			        <li className="dropdown">
			          <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></Link>
			          <ul className="dropdown-menu">
			            <li><Link to="/dashboard">Dashboard</Link></li>
			            <li><Link to="/admin/dashboard">Update Details</Link></li>
			            <li><a onClick={this.props.logoutAction}>Logout</a></li>
			          </ul>
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>
		);
	}
};

export default connect(null, { logoutAction })(Navbar);