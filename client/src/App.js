import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Auth/Login";
import ScrollToTop from "./helpers/ScrollToTop";
import Register from "./components/Auth/Register";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import './App.css';

const App = () =>{
  return (
  	<Router>
  		<ScrollToTop>
		  	<Fragment>
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
  )
};

const OtherRoutes = () =>(
	<Fragment>
		<Navbar />
	</Fragment>
);

export default App;
