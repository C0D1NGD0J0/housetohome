import React, { Fragment } from 'react';
import { Router, Route, Switch} from "react-router-dom";
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
import ManageListings from "./components/Listing/Admin/ManageListings";
import ManageUsers from "./components/User/admin/ManageUsers";
import NewEmployee from "./components/User/admin/NewEmployee";
import NewListing from "./components/Listing/NewListing/";
import Listing from "./components/Listing/DisplayListing/";
import { Provider } from "react-redux";
import PrivateRoute from "./helpers/PrivateRoute";
import AdminPrivateRoute from "./helpers/EmployeePrivateRoute";
import store from "./store";
import history from "./helpers/history";
import "./helpers/validateAuthUser";
import './App.css';

const App = () =>{
  return (
  	<Provider store={store}>
	  	<Router history={history}>
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
			<AdminPrivateRoute exact path="/admin/employees/new" component={NewEmployee} />
			<AdminPrivateRoute exact path="/admin/properties" component={ManageListings} />
			<AdminPrivateRoute exact path="/admin/manage_users" component={ManageUsers} />
			<AdminPrivateRoute exact path="/admin/properties/new" component={NewListing} />
			<AdminPrivateRoute exact path="/admin/properties/edit/:id" component={NewListing} />
			<Route exact path="/properties/:id" component={Listing} />
			<PrivateRoute exact path="/dashboard" component={Dashboard} />
			<PrivateRoute exact path="/account_update" component={AccountUpdate} />
		</Fragment>
	</Switch>
);

export default App;
