import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAction } from "../../actions/authAction";

class Navbar extends Component {
	render() {
		const { isAuthenticated, info } = this.props.user;
		
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
			        { isAuthenticated ?
			        	<li className="dropdown">
				          <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{info && info.firstName}<span className="caret"></span></Link>
				          <ul className="dropdown-menu">
				            { info && !info.role.isGuest ? <li><Link to="/admin/dashboard">Admin</Link></li> : null }
				            <li><Link to="/dashboard">Dashboard</Link></li>
				            <li><Link to="/account_update">Settings</Link></li>
				            <li><a onClick={this.props.logoutAction}>Logout</a></li>
				          </ul>
				        </li> : null
				      }
			      </ul>
			    </div>
			  </div>
			</nav>
		);
	}
};

const mapStateToProps = state =>({
	user: state.user
});

export default connect(mapStateToProps, { logoutAction })(Navbar);