import React, { PropTypes } from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth: {isAuthenticated}, ...rest }) => {
	return (
	<Route {...rest} render={props => !isAuthenticated ? <Redirect to="/login" /> : <Component {...props} />} />
);
}

PrivateRoute.displayName = 'PrivateRoute';

const mapStateToProps = state =>({
	auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);