import React, { useState } from 'react';
import ContentWrapper from "../layout/ContentWrapper";
import InputField from "../../helpers/FormElements/inputField";
import { Link } from "react-router-dom";

const Register = ({ className }) => {
	const [formData, updateFormData] = useState({fname: '', lname: '', email: '', phone: '', password: '', password2: ''});

	const { fname, lname, email, phone, password, password2 } = formData;
	const onFormFieldChange = e => updateFormData({ ...formData, [e.target.name]: e.target.value });
	const onFormSubmit = e =>{
		e.preventDefault();
		if(password !== password2) return console.log("Passwords don't match");
		console.log(formData);
	}

  return (
  	<ContentWrapper mainClass="login_bg-img" containerClass="login">
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
									value={fname}
									name="fname"
									label="First Name"
									onChange={onFormFieldChange} 
								/>
							</div>

							<div className="col-sm-4">
								<InputField
									type="text" 
									className="form-control" 
									placeholder="Enter Last Name..." 
									value={lname}
									name="lname"
									label="Last Name"
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


export default Register;