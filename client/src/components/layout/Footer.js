import React, { PropTypes } from 'react';
import { connect } from "react-redux";
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Footer = ({ isAuthenticated }) => {
  return (
    <footer id="footer">
	    <div className="container">
	      <div className="row">
	        <div className="col-xs-3 col-sm-3 col-md-3">
	          <div className="footer-about">
	            <h5>About Us</h5><hr/>
	            <p className="footer-about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita vero perspiciatis facere excepturi recusandae fuga est, quod iste.</p>
	          </div>
	        </div>

	        <div className="col-xs-3 col-xs-offset-1 col-sm-3 col-sm-offset-2 col-md-2 col-md-offset-3">
	          <h5>Account</h5><hr/>
	          <ul className="footer-list-links">
	          	{	isAuthenticated ? <li><NavLink to="/dashboard">Dashboard</NavLink></li> : <li><NavLink to="/login">Login</NavLink></li>}
	          </ul>
	        </div>

	        <div className="col-xs-2 col-sm-2 col-md-2">
	          <h5>Company</h5><hr/>
	          <ul className="footer-list-links">
	          	<li><NavLink to="/">Home</NavLink></li>
	            <li><NavLink to="/#about">About Us</NavLink></li>
	            <li><NavLink to="#!">FAQ</NavLink></li>
	            <li><NavLink to="#!">Careers</NavLink></li>
	            <li><NavLink to="/#contact">Contact</NavLink></li>
	          </ul>
	        </div>

	        <div className="col-xs-2 col-sm-2 col-md-2">
	          <h5>Follow Us</h5><hr/>
	          <ul className="footer-list-links">
	            <li><NavLink to="#">Facebook</NavLink></li>
	            <li><NavLink to="#">Twitter</NavLink></li>
	            <li><NavLink to="#">Google-plus</NavLink></li>
	            <li><NavLink to="#">Instagram</NavLink></li>
	          </ul>
	        </div>
	      </div>
	    </div>
	  </footer> 
  );
};

Footer.displayName = 'Footer';

const mapStateToProps = state =>({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Footer);