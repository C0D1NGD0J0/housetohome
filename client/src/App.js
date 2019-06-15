import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Auth/Login";
import ScrollToTop from "./helpers/ScrollToTop";
import Register from "./components/Auth/Register";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/User/Dashboard";
import AccountUpdate from "./components/User/AccountUpdate";
import AdminDashboard from "./components/User/admin/AdminDashboard";
import ManageListings from "./components/User/admin/ManageListings";
import ManageUsers from "./components/User/admin/ManageUsers";
import NewEmployee from "./components/User/admin/NewEmployee";
import NewListing from "./components/Listing/NewListing/";
import { clearErrors } from "./actions/utilAction";
import { setAuthHeaderToken } from "./helpers/";
import { Provider } from "react-redux";
import PrivateRoute from "./helpers/PrivateRoute";
import AdminPrivateRoute from "./helpers/EmployeePrivateRoute";
import store from "./store";
import "./helpers/validateAuthUser";
import './App.css';

const App = () =>{
  return (
  	<Provider store={store}>
	  	<Router>
	  		<ScrollToTop>
			  	<Fragment>
			  		<Alert />
			    	<Switch>
			    		<Route exact path="/login" component={Login} />
							<Route exact path="/register" component={Register} />
			    		<Route exact path="/" component={Landing} />
			    		<Route component={OtherRoutes} />
			    	</Switch>
			    	<Footer />
			  	</Fragment>
			  </ScrollToTop>
		  </Router>
	  </Provider>
  )
};

const OtherRoutes = () =>(
	<Switch>
		<Fragment>
			<Navbar />
			<AdminPrivateRoute exact path="/admin/dashboard" component={AdminDashboard} />
			<AdminPrivateRoute exact path="/admin/new_employee" component={NewEmployee} />
			<AdminPrivateRoute exact path="/admin/manage_listings" component={ManageListings} />
			<AdminPrivateRoute exact path="/admin/manage_users" component={ManageUsers} />
			<AdminPrivateRoute exact path="/admin/new_listing" component={NewListing} />
			<PrivateRoute exact path="/dashboard" component={Dashboard} />
			<PrivateRoute exact path="/account_update" component={AccountUpdate} />
		</Fragment>
	</Switch>
);

export default App;
