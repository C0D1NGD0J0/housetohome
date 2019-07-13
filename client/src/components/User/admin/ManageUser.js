import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import AdminSidebar from "../../layout/Sidebar/adminSidebar";
import { getUserAccount } from "../../../actions/adminAction";
import { updateUserAction, deleteAccountAction } from "../../../actions/userAction";
import InputField from "../../../helpers/FormElements/inputField";
import Panel from "../../layout/Panel";
import Table from "../../layout/Table";
import { truncateText } from "../../../helpers";

class ManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	firstName: "",
    	lastName: "",
    	email: "",
    	phone: "",
			admin: false
    };
  }
	
	componentDidMount(){
		const { currentuser } = this.props;
		const { id } = this.props.match.params;

		if(!currentuser.isAuthenticated){
			return this.props.history.push("/login");
		} else if (!currentuser.info.isadmin) {
			return this.props.history.push("/dashboard");
		};

		if(id && id.length === 24){
			this.props.getUserAccount(id);
		};
	}

	componentDidUpdate(prevProps, prevState){
		const {user} = this.props;
		const { currentuser } = this.props;

		if(!currentuser.isAuthenticated){
			return this.props.history.push("/login");
		} else if (!currentuser.info.isadmin) {
			return this.props.history.push("/dashboard");
		};
		
		if(user.info && prevState.firstName !== user.info.firstName){
			this.setState({
				firstName: user.info.firstName,
				lastName: user.info.lastName,
				email: user.info.email,
				phone: user.info.phone,
			});
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
		// const { id } = this.props.user.info;
		// const { firstName, lastName, email, phone, makeAdmin } = this.state;
		// const data = { firstName, lastName, email, phone, makeAdmin };

		// return this.props.updateUserAction(data);
  }

  render() {
  	const { firstName, lastName, email, phone } = this.state;
		const { errors, user, currentuser } = this.props;
		const tableRow = user && user.properties.map((listing, i) =>{
			return (
				<tr key={i}>
					<td>{i+1}</td>
					<td className="text-capitalize">{truncateText(listing.location.address, 18)}</td>
					<td className="text-capitalize">{listing.propertyType}</td>
					<td className="text-capitalize">{listing.listingType}</td>
					<td>
						<Link to={`/properties/${listing.id}`} className="actionBtn"><i className="fa fa-eye"></i></Link>
					</td>
				</tr>
			);
		});

		if(!user) return null;
    return(
    	<ContentWrapper containerClass="container">
				<div className="row">
					<div className="col-xs-4 col-sm-3">
						<SidebarWrapper>
							<AdminSidebar user={currentuser.info} />
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
									</div><br/>

									<div className="form-group">
										<input type="submit" value="Update Account" className="btn btn-success" />
										<button className="btn btn-danger pull-right" onClick={this.deleteAccount}> Delete Account</button>
									</div>
								</form>
							</Panel>
						</div>

						<div className="col-sm-12">
							<Panel title={`${user.info.firstName} Listings`}>
								<Table>
									<thead>
										<tr>
											<th>#</th>
							        <th>Address</th>
							        <th>Property Type</th>
							        <th>Listing Type</th>
										</tr>
									</thead>
									<tbody>
										{user && user.properties.length <= 0 ? null :tableRow}
									</tbody>
								</Table>
							</Panel>
						</div>

						<div className="col-sm-12">
							<Panel title="Upcoming Viewings">
								<Table>
									<thead>
										<tr>
											<th>#</th>
							        <th>Name</th>
							        <th>Email</th>
							        <th>Phone</th>
							        <th>Property</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</Table>
							</Panel>
						</div>
					</div>
				</div>
			</ContentWrapper>
    );
  }
};

const mapStateToProps = state =>({
	currentuser: state.user,
	user: state.admin.users.show,
	errors: state.errors
});

const mapDispatchToProps = {
	updateUserAction,
	deleteAccountAction,
	getUserAccount
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageUser);