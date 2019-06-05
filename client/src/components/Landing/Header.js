import React, { useState, useEffect } from 'react';
import classnames from "classnames";

const Header = ({ className }) => {
	const [prevScrollpos, setPosition] = useState(window.pageYOffset);
	const [backdrop, setBackdrop] = useState(false);

	const handleScroll = (e) => {
		const currentScrollpos = window.pageYOffset;
		let visibleBackdrop = prevScrollpos > currentScrollpos;
		
		setPosition(currentScrollpos);
		if(currentScrollpos < 150){
			setBackdrop(!visibleBackdrop);
		}else {
			setBackdrop(visibleBackdrop);
		};
	}

	useEffect(() =>{
		console.log("use effect");
		 window.addEventListener("scroll", handleScroll);
	}, []);

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
						<a href="login.html"><i className="fa fa-sign-in"></i> Login</a>
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
						<a href="#" className="navbar-brand">House<span className="green-text">to</span>Home</a>
					</div>

					<div className="header_menu collapse navbar-collapse" id="header_menu">
						<ul className="nav navbar-nav navbar-right">
							<li><a href="index.html">Home</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="properties.html">Properties</a></li>
							<li><a href="#">About Us</a></li>
							<li><a href="#">Blog</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
  );
};

Header.displayName = 'Header';

export default Header;