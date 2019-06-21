import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AdminPrivateRoute = ({ component: Component, user: {isAuthenticated, info}, ...rest }) => {
	const isPermitted = info && info.role === "employee";
	return <Route {...rest} render={props => (isAuthenticated && isPermitted) || true ? <Component {...props} /> : <Redirect to="/dashboard" />} />
};

AdminPrivateRoute.displayName = 'AdminPrivateRoute';

const mapStateToProps = state =>({
	user: state.user
});

export default connect(mapStateToProps)(AdminPrivateRoute);