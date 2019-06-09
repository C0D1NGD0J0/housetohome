import React, { Component } from 'react';
import { connect } from "react-redux";
import ContentWrapper from "../layout/ContentWrapper";
import SidebarWrapper from "../layout/Sidebar";
import UserSidebar from "../layout/Sidebar/userSidebar";
import InputField from "../../helpers/FormElements/inputField";
import Panel from "../layout/Panel";

class AccountUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	firstName: "",
    	lastName: "",
    	email: "",
    	phone: "",
			password: "",
			password2: "",
			errors: {}
    };
  }

  onFormFieldChange = (e) =>{

  }

  onFormSubmit = (e) =>{

  }

  render() {
  	const { firstName, lastName, email, phone, password, password2, errors } = this.state;

    return(
    	<ContentWrapper containerClass="container-fluid">
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
													error={errors.password2}
													label="Confirm New Password"
													onChange={this.onFormFieldChange} 
												/>
											</div>
										</div>
									</div><br/>

									<div className="form-group">
										<input type="submit" value="Update Account" className="btn btn-success btn-block" />
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

export default AccountUpdate;