import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import './App.css';

const App = () =>{
  return (
  	<Router>
	  	<Fragment>
	    	<Route exact path="/" component={Landing} />
	    	<Switch>
	    		<Navbar />
		    	<Route exact path="/login" component={Login} />
		    	<Route exact path="/register" component={Register} />
	    	</Switch>
	    	<Footer />
	  	</Fragment>
	  </Router>
  )
};

export default App;
