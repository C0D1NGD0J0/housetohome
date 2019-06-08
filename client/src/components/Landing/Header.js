import React, { useState, useEffect, Fragment } from 'react';
import classnames from "classnames";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { connect } from "react-redux";
import { logoutAction } from "../../actions/authAction";

const Header = ({ auth: {isAuthenticated, loading}, logoutAction }) => {

	const [prevScrollpos, setPosition] = useState(window.pageYOffset);
	const [backdrop, setBackdrop] = useState(false);

	const handleScroll = (e) => {
		const currentScrollpos = window.pageYOffset;
		let visibleBackdrop = prevScrollpos > currentScrollpos;
		
		setPosition(currentScrollpos);
		if(currentScrollpos <= 150){
			setBackdrop(!visibleBackdrop);
		}else {
			setBackdrop(visibleBackdrop);
		};
	}

	useEffect(() =>{
		window.addEventListener("scroll", handleScroll);
		return () =>{
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	
	const authLinks = (
		<Fragment>
			{!isAuthenticated ?
				<Fragment>
					<li><NavLink to="/register"><i className="fa fa-user-circle-o"></i></NavLink></li>
					<li><NavLink to="/login"><i className="fa fa-key"></i></NavLink></li>
				</Fragment> :
					<Fragment>
						<li><NavLink to="/dashboard"><i className="fa fa-user-circle"></i></NavLink></li>
						<li><a onClick={logoutAction}><i className="fa fa-sign-out"></i></a></li>
					</Fragment>
			}
		</Fragment>
	);

  return (
  	<header className="header" id="header">
			<div className="header-top grey-nav-bg">
				<div className="header-top_left">
					<div className="header-top_info">
						<a href="#"><i className="fa fa-phone"></i> (+1) 666 121 2345</a>
					</div>

					<div className="header-top_info">
						<a href="#"><i className="fa fa-at"></i> info@example.com</a>
					</div>
				</div>
				
				<div className="header-top_right">
					<div className="header-top_social">
						<a href="#"><i className="fa fa-facebook-f"></i></a>
						<a href="#"><i className="fa fa-instagram"></i></a>
						<a href="#"><i className="fa fa-twitter"></i></a>
						<a href="#"><i className="fa fa-pinterest-p"></i></a>
					</div>
					<div className="header-top_auth">
						{ !isAuthenticated ? <NavLink to="/login"><i className="fa fa-sign-in"></i> Login</NavLink> : "" }
					</div>
				</div>
			</div>

			<nav className={classnames("navbar navbar-inverse navbar-fixed-top",{"header_navbar": backdrop})}>
				<div className="container">
					<div className="navbar-header">

						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" target="#header_menu">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<NavLink to="/" className="navbar-brand">House<span className="green-text">to</span>Home</NavLink>
					</div>

					<div className="header_menu collapse navbar-collapse" id="header_menu">
						<ul className="nav navbar-nav navbar-right">
							<li><NavLink smooth to="/#home">Home</NavLink></li>
							<li><NavLink smooth to="/#services">Services</NavLink></li>
							<li><NavLink smooth to="/#featured-properties">Properties</NavLink></li>
							<li><NavLink smooth to="/#about">About Us</NavLink></li>
							<li><NavLink smooth to="/#contact">Contact</NavLink></li>
							{authLinks}
						</ul>
					</div>
				</div>
			</nav>
		</header>
  );
};

Header.displayName = 'Header';

const mapStateToProps = state =>({
	auth: state.auth
});

export default connect(mapStateToProps, { logoutAction })(Header);