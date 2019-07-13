import React, { useState, Fragment } from 'react';
import ContentWrapper from "../layout/ContentWrapper";
import InputField from "../../helpers/FormElements/inputField";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { forgotPasswordAction } from "../../actions/authAction";

const ForgotPassword = (props) => {
	const { forgotPasswordAction, errors, title, password, password2, onResetPWDFormSubmit, token, onResetPWDInputChange, resetErrors } = props;
	const [formData, updateFormData] = useState({ email: '' });
	const { email } = formData;

	const onFormFieldChange = e => updateFormData({ email: e.target.value });

	const onFormSubmit = e =>{
		e.preventDefault();
		forgotPasswordAction(formData);
		return setTimeout(() => updateFormData({ email: '' }), 5000);
	};

	const resetPwdSubmit = e => onResetPWDFormSubmit(e);

  return (
    <ContentWrapper mainClass="login_bg-img" containerClass="container login">
			<div className="row">
				<div className="section-title text-center">
					<h3>{title ? title : 'Forgot your password?'}</h3><hr/>
				</div>

				<div className="col-xs-6 col-xs-offset-3">
		      <form onSubmit={token ? resetPwdSubmit : onFormSubmit} className="form">
		      {
		      	!token ? 
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
						: 
							<Fragment>
								<InputField
									type="password" 
									className="form-control" 
									placeholder="Enter New Password..." 
									value={password}
									name="password"
									label="Password"
									error={resetErrors.password}
									onChange={(e) => onResetPWDInputChange(e)} 
								/>

								<InputField
									type="password" 
									className="form-control" 
									placeholder="Confirm password..." 
									value={password2}
									name="password2"
									label="Password Confirmation"
									error={resetErrors.password2}
									onChange={(e) => onResetPWDInputChange(e)} 
								/>
							</Fragment>
					}

						<input type="submit" value="Send password" className="btn btn-green btn-block" />
						<div className="form_footer">
							<hr/>
							<Link to="/login">Trying to Login?</Link>
						</div>
					</form>
		    </div>
		  </div>
		</ContentWrapper>  
  );
};

ForgotPassword.displayName = 'ForgotPassword';

const mapStateToProps = (state) =>({
	errors: state.errors
});

export default connect(mapStateToProps, {forgotPasswordAction})(ForgotPassword);