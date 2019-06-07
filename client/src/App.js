import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Auth/Login";
import ScrollToTop from "./helpers/ScrollToTop";
import Register from "./components/Auth/Register";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";
import { loadUserAction } from "./actions/authAction";
import { setAuthToken } from "./helpers/";
import { Provider } from "react-redux";
import store from "./store";
import './App.css';

if(localStorage.token){
	setAuthToken(localStorage.token);
};

const App = () =>{
	// useEffect(() =>{
	// 	store.dispatch(loadUserAction());
	// }, []);

  return (
  	<Provider store={store}>
	  	<Router>
	  		<ScrollToTop>
			  	<Fragment>
			  		<Alert />
			    	<Switch>
			    		<Route exact path="/" component={Landing} />
			    		<Route exact path="/login" component={Login} />
							<Route exact path="/register" component={Register} />
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
	<Fragment>
		<Navbar />
	</Fragment>
);

export default App;
