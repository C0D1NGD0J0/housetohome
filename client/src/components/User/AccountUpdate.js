import React, { Component } from 'react';
import { connect } from "react-redux";
import ContentWrapper from "../layout/ContentWrapper";
import SidebarWrapper from "../layout/Sidebar";
import UserSidebar from "../layout/Sidebar/userSidebar";
import { updateUserAction, deleteAccountAction } from "../../actions/userAction";
import InputField from "../../helpers/FormElements/inputField";
import Panel from "../layout/Panel";

class AccountUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	firstName: this.props.user.info.firstName || "",
    	lastName: this.props.user.info.lastName || "",
    	email: this.props.user.info.email || "",
    	phone: this.props.user.info.phone || "",
			password: "",
			password2: ""
    };
  }

  onFormFieldChange = (e) =>{
		this.setState({ [e.target.name]: e.target.value });
  }

  deleteAccount = (e) =>{
  	e.preventDefault();
  	const { id } = this.props.user && this.props.user.info;
  	const response = window.confirm("Are you sure you want to close your account?");
  	
  	if(response) return this.props.deleteAccountAction(id);
  }

  onFormSubmit = (e) =>{
		e.preventDefault();
		const { id } = this.props.user.info;
		const { firstName, lastName, email, phone, password, password2 } = this.state;
		const data = { firstName, lastName, email, phone };

		if(password !== "" && password2 !== ""){
			data.password = password;
			data.password2 = password2;
		};

		return this.props.updateUserAction(data);
  }

  render() {
  	const { firstName, lastName, email, phone, password, password2 } = this.state;
		const { errors } = this.props;

    return(
    	<ContentWrapper containerClass="container">
				<div className="row">
					<div className="col-xs-4 col-sm-3">
						<SidebarWrapper>
							<UserSidebar />
						</SidebarWrapper>
					</div>

					<div className="col-xs-8 col-sm-9">
						<div className="col-sm-12">
							<Panel title="Account Setting">
								<form onSubmit={this.onFormSubmit} className="form">
									<div className="row">
										<div className="col-sm-6">
											<InputField
												type="text" 
												className="form-control" 
												placeholder="Enter First Name..." 
												value={firstName}
												name="firstName"
												label="First Name"
												error={errors.firstName}
												onChange={this.onFormFieldChange} 
											/>
										</div>

										<div className="col-sm-6">
											<InputField
												type="text" 
												className="form-control" 
												placeholder="Enter Last Name..." 
												value={lastName}
												name="lastName"
												label="Last Name"
												error={errors.lastName}
												onChange={this.onFormFieldChange} 
											/>
										</div>
										
										<div className="col-sm-7">
											<InputField
												type="email" 
												className="form-control" 
												placeholder="Enter Email..." 
												value={email}
												name="email"
												label="Email"
												error={errors.email}
												onChange={this.onFormFieldChange} 
											/>
										</div>

										<div className="col-sm-5">
											<InputField
												type="text" 
												className="form-control" 
												placeholder="Enter Phone number..." 
												value={phone}
												name="phone"
												label="Phone"
												error={errors.phone}
												onChange={this.onFormFieldChange} 
											/>
										</div>
										<div className="clearfix"></div><hr/>
										<div className="pwd-setting">
											<div className="col-sm-6">
												<InputField
													type="password" 
													className="form-control" 
													placeholder="Enter Password..." 
													value={password}
													autocomplete={"true"}
													name="password"
													label="New Password"
													error={errors.password}
													onChange={this.onFormFieldChange} 
												/>
											</div>

											<div className="col-sm-6">
												<InputField
													type="password" 
													className="form-control" 
													placeholder="Enter Password Confirmation..." 
													value={password2}
													name="password2"
													autocomplete={"true"}
													error={errors.password2}
													label="Confirm New Password"
													onChange={this.onFormFieldChange} 
												/>
											</div>
										</div>
									</div><br/>

									<div className="form-group">
										<input type="submit" value="Update Account" className="btn btn-success" />
										<button className="btn btn-danger pull-right" onClick={this.deleteAccount}> Delete Account</button>
									</div>
								</form>
							</Panel>
						</div>
					</div>
				</div>
			</ContentWrapper>
    );
  }
};

const mapStateToProps = state =>({
	user: state.user,
	errors: state.errors
});

const mapDispatchToProps = {
	updateUserAction,
	deleteAccountAction
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountUpdate);