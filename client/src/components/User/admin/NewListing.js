import React, { Component } from 'react';
import { connect } from "react-redux";
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import AdminSidebar from "../../layout/Sidebar/adminSidebar";
// import { } from "../../../actions/userAction";
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import Panel from "../../layout/Panel";

class NewEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFormFieldChange = (e) =>{
		this.setState({ [e.target.name]: e.target.value });
  }

  onFormSubmit = (e) =>{
		e.preventDefault();

  }

  onSelectChange = (e) =>{
  	this.setState({ [e.target.name]: e.target.value });
  }

  render() {
		const { errors } = this.props;

    return(
    	<ContentWrapper containerClass="container">
				<div className="row">
					<div className="col-xs-4 col-sm-3">
						<SidebarWrapper>
							<AdminSidebar />
						</SidebarWrapper>
					</div>

					<div className="col-xs-8 col-sm-9">
						<form onSubmit={this.onFormSubmit} className="form">
							
						</form>
					</div>
				</div>
			</ContentWrapper>
    );
  }
};

const mapStateToProps = state =>({
	
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewEmployee);