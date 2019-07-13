import React, { Component } from 'react';
import ForgotPassword from "./ForgotPassword";
import history from "../../helpers/history";
import { resetPasswordAction } from "../../actions/authAction";
import { connect } from "react-redux";

class ResetPassword extends Component {
  constructor(props){
		super(props);
		this.state = {password: "", password2: "", token: ""};
  }

  componentDidMount(){
		const { token } = this.props.match.params;
		if(token && (token.length === 40)){
			return this.setState({token});
		};

		return history.push("/forgot_password");
  }

  onResetPWDInputChange = (e) =>{
  	const { name, value } = e.target;
  	this.setState({ [name]: value });
  }

  onResetPWDFormSubmit = (e) =>{
  	e.preventDefault();
  	const formData = {...this.state}
  	return this.props.resetPasswordAction(formData);
  }

  render() {
  	const { password, password2, token } = this.state;
  	const { errors } = this.props;

    return (
    	<ForgotPassword 
    		title="Reset your password" 
    		password={password} 
    		password2={password2} 
    		onResetPWDFormSubmit={this.onResetPWDFormSubmit} 
    		token={token} 
    		onResetPWDInputChange={this.onResetPWDInputChange} 
    		resetErrors={errors}
    	/>
    );
  }
}

const mapStateToProps = state =>({
	errors: state.errors
});

export default connect(mapStateToProps, {resetPasswordAction})(ResetPassword);