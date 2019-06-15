import React, { Component } from 'react';
import { connect } from "react-redux";
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import AdminSidebar from "../../layout/Sidebar/adminSidebar";
import { registerEmployeeAction } from "../../../actions/adminAction";
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import Panel from "../../layout/Panel";

class NewEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	firstName: "",
    	lastName: "",
    	email: "",
    	phone: "",
			password: "",
			role: "",
    };
  }

  onFormFieldChange = (e) =>{
		this.setState({ [e.target.name]: e.target.value });
  }

  onFormSubmit = (e) =>{
		e.preventDefault();

		const { firstName, lastName, email, phone, password, role } = this.state;
		const data = { firstName, lastName, email, phone, password, role };

		this.props.registerEmployeeAction(data, this.props.history);
		return this.resetForm();
  }

  onSelectChange = (e) =>{
  	this.setState({ role: e.target.value });
  }

  resetForm = () =>{
		this.setState({firstName: "",lastName: "",email: "",phone: "",password: "",role: ""});
  };

  render() {
  	const { firstName, lastName, email, phone, password, role } = this.state;
		const { errors, currentuser: {info} } = this.props;
		
    return(
    	<ContentWrapper containerClass="container">
				<div className="row">
					<div className="col-xs-4 col-sm-3">
						<SidebarWrapper>
							<AdminSidebar user={info} />
						</SidebarWrapper>
					</div>

					<div className="col-xs-8 col-sm-9">
						<Panel title="New Employee">
							<form onSubmit={this.onFormSubmit} className="form">
								<div className="row">
									<div className="col-sm-4">
										<InputField
											type="text" 
											className="form-control" 
											placeholder="Enter First Name..." 
											value={firstName}
											name="firstName"
											error={errors.firstName}
											label="First Name"
											onChange={this.onFormFieldChange} 
										/>
									</div>

									<div className="col-sm-4">
										<InputField
											type="text" 
											className="form-control" 
											placeholder="Enter Last Name..." 
											value={lastName}
											name="lastName"
											error={errors.lastName}
											label="Last Name"
											onChange={this.onFormFieldChange} 
										/>
									</div>
									
									<div className="col-sm-4">
										<InputField
											type="text" 
											className="form-control" 
											placeholder="Enter Phone number..." 
											value={phone}
											name="phone"
											error={errors.phone}
											label="Contact Number(#)"
											onChange={this.onFormFieldChange} 
										/>
									</div>

									<div className="col-sm-12">
										<InputField
											type="email" 
											className="form-control" 
											placeholder="Enter Email address..." 
											value={email}
											name="email"
											error={errors.email}
											label="Email"
											onChange={this.onFormFieldChange} 
										/>
									</div>

									<div className="col-sm-6">
										<InputField
											type="password" 
											className="form-control" 
											placeholder="Enter Password..." 
											value={password}
											name="password"
											error={errors.password}
											label="Password"
											onChange={this.onFormFieldChange} 
										/>
									</div>

									<div className="col-sm-6">
										<SelectTag error={errors.role} label="Access Privilage" name="role" selectChange={this.onSelectChange} value={role} options={['admin', 'staff']} />
									</div>
								</div><br/>

								<div className="form-group">
									<input type="submit" value="Add Employee" className="btn btn-success btn-block" />
								</div>
							</form>
						</Panel>
					</div>
				</div>
			</ContentWrapper>
    );
  }
};

const mapStateToProps = state =>({
	currentuser: state.user,
	errors: state.errors
});

const mapDispatchToProps = {
	registerEmployeeAction
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEmployee);