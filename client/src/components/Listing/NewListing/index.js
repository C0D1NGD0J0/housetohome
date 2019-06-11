import React, { Component } from 'react';
import { connect } from "react-redux";
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import AdminSidebar from "../../layout/Sidebar/adminSidebar";
import Panel from "../../layout/Panel";
import StepOne from "./Step1";
import StepTwo from "./Step2";
import StepThree from "./Step3";
import StepFour from "./Step4";
import StepFive from "./Step5";

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
						<Panel title="New Listing">
							<form onSubmit={this.onFormSubmit} className="form">
								<div className="row">
									<StepOne />
									<StepTwo />
									<StepThree />
									<StepFour />
									<StepFive />

									<div className="col-sm-12">
							  		<button className="btn btn-success pull-right">
							  			Next <i className="fa fa-arrow-right"></i>
							  		</button>

							  		<button className="btn btn-default pull-left">
							  			<i className="fa fa-arrow-left"></i> PREV
							  		</button>
									</div>
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
	
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewEmployee);