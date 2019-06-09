import React, { PropTypes } from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AdminPrivateRoute = ({ component: Component, auth: {isAuthenticated, user}, ...rest }) => {
	const roles = ['isAdmin', 'isStaff'];
	const isPermitted = roles.includes(user && Object.keys(user.role)[0]);

	return <Route {...rest} render={props => (isAuthenticated && isPermitted) || true? <Component {...props} /> : <Redirect to="/dashboard" />} />
};

AdminPrivateRoute.displayName = 'AdminPrivateRoute';

const mapStateToProps = state =>({
	auth: state.auth
});

export default connect(mapStateToProps)(AdminPrivateRoute);