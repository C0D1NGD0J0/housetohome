import React, { PropTypes } from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AdminPrivateRoute = ({ component: Component, user: {isAuthenticated, info}, ...rest }) => {
	const roles = ['isAdmin', 'isStaff'];
	const isPermitted = roles.includes(info && Object.keys(info.role)[0]);

	return <Route {...rest} render={props => (isAuthenticated && isPermitted) || true? <Component {...props} /> : <Redirect to="/dashboard" />} />
};

AdminPrivateRoute.displayName = 'AdminPrivateRoute';

const mapStateToProps = state =>({
	user: state.user
});

export default connect(mapStateToProps)(AdminPrivateRoute);