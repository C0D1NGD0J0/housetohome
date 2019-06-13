import React, { useState } from 'react';
import ContentWrapper from "../layout/ContentWrapper";
import InputField from "../../helpers/FormElements/inputField";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from "../../actions/authAction";

const Login = ({ loginAction, user: {isAuthenticated, user}, errors }) => {
	const [formData, updateFormData] = useState({ email: '', password: '' });
	const { email, password } = formData;

	const onFormFieldChange = e => updateFormData({ ...formData, [e.target.name]: e.target.value });
	const onFormSubmit = e =>{
		e.preventDefault();
		loginAction(formData);
	}

	if(isAuthenticated){
		return <Redirect to="/dashboard" />
	};

  return (
    <ContentWrapper mainClass="login_bg-img" containerClass="container login">
			<div className="row">
				<div className="section-title text-center">
					<h3>Login</h3><hr/>
				</div>
				<div className="col-xs-6 col-xs-offset-3">
		      <form onSubmit={onFormSubmit} className="form">
						<InputField
							type="email" 
							className="form-control" 
							placeholder="Enter Email..." 
							value={email}
							name="email"
							label="Email"
							error={errors.email}
							onChange={onFormFieldChange} 
						/>

						<InputField
							type="password" 
							className="form-control" 
							placeholder="Enter Password..." 
							value={password}
							name="password"
							label="Password"
							error={errors.password}
							onChange={onFormFieldChange} 
						/><br/>

						<input type="submit" value="Register" className="btn btn-green btn-block" />

						<div className="form_footer">
							<Link to="/forgot_password">Forgot your password?</Link> <span>|</span>
							<Link to="/register">Register</Link>
						</div>
					</form>
		    </div>
		  </div>
		</ContentWrapper>  
  );
};

Login.displayName = 'Login';

const mapStateToProps = (state) =>({
	errors: state.errors,
	user: state.user
});

export default connect(mapStateToProps, { loginAction })(Login);