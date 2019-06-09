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
import AdminDashboard from "./components/User/admin/AdminDashboard";
import { loadUserAction } from "./actions/authAction";
import { clearErrors } from "./actions/utilAction";
import { setAuthHeaderToken } from "./helpers/";
import { Provider } from "react-redux";
import PrivateRoute from "./helpers/PrivateRoute";
import AdminPrivateRoute from "./helpers/EmployeePrivateRoute";
import store from "./store";
import './App.css';

if(localStorage.token){
	setAuthHeaderToken(localStorage.token);
};

const App = () =>{
	useEffect(() =>{
		store.dispatch(loadUserAction());
	}, []);

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
			<PrivateRoute exact path="/dashboard" component={Dashboard} />
		</Fragment>
	</Switch>
);

export default App;
