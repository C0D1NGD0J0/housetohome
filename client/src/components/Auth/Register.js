import React, { useState } from 'react';
import { connect } from "react-redux";
import ContentWrapper from "../layout/ContentWrapper";
import InputField from "../../helpers/FormElements/inputField";
import { Link, Redirect } from "react-router-dom";
import { setAlertAction } from "../../actions/alertAction";
import { registerAction } from "../../actions/authAction";

const Register = ({ setAlertAction, registerAction, errors, history, isAuthenticated }) => {
	const [formData, updateFormData] = useState({firstName: '', lastName: '', email: '', phone: '', password: '', password2: ''});
	const { firstName, lastName, email, phone, password, password2 } = formData;

	const onFormFieldChange = e => updateFormData({ ...formData, [e.target.name]: e.target.value });
	const onFormSubmit = e =>{
		e.preventDefault();
		return registerAction(formData, history);
	};
	
	if(isAuthenticated){
		return <Redirect to="/" />
	}

  return (
  	<ContentWrapper mainClass="login_bg-img" containerClass="container login">
			<div className="row">
				<div className="section-title text-center">
					<h3>Guest Registeration</h3><hr/>
				</div>
				<div className="col-xs-8 col-xs-offset-2">
		      <form onSubmit={onFormSubmit} className="form">
						<div className="row">
							<div className="col-sm-4">
								<InputField
									type="text" 
									className="form-control" 
									placeholder="Enter First Name..." 
									value={firstName}
									name="firstName"
									label="First Name"
									error={errors.firstName}
									onChange={onFormFieldChange} 
								/>
							</div>

							<div className="col-sm-4">
								<InputField
									type="text" 
									className="form-control" 
									placeholder="Enter Last Name..." 
									value={lastName}
									name="lastName"
									label="Last Name"
									error={errors.lastName}
									onChange={onFormFieldChange} 
								/>
							</div>
							
							<div className="col-sm-4">
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
							</div>

							<div className="col-sm-12">
								<InputField
									type="text" 
									className="form-control" 
									placeholder="Enter Phone number..." 
									value={phone}
									name="phone"
									label="Phone"
									error={errors.phone}
									onChange={onFormFieldChange} 
								/>
							</div>

							<div className="col-sm-6">
								<InputField
									type="password" 
									className="form-control" 
									placeholder="Enter Password..." 
									value={password}
									name="password"
									label="Password"
									error={errors.password}
									onChange={onFormFieldChange} 
								/>
							</div>

							<div className="col-sm-6">
								<InputField
									type="password" 
									className="form-control" 
									placeholder="Enter Password Confirmation..." 
									value={password2}
									name="password2"
									error={errors.password2}
									label="Password Confirmation"
									onChange={onFormFieldChange} 
								/>
							</div>
						</div><br/>

						<div className="form-group">
							<input type="submit" value="Register" className="btn btn-green btn-block" />
						</div>

						<div className="form_footer">
							<Link to="/forgot_password">Forgot your password?</Link> <span>|</span>
							<Link to="/login">Login...</Link>
						</div>
					</form>
		    </div>
		  </div>
		</ContentWrapper>
  );
};

Register.displayName = 'Register';

const mapStateToProps =(state) =>({
	errors: state.errors,
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlertAction, registerAction })(Register);