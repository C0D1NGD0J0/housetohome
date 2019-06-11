import React, { Component } from 'react';
import { connect } from "react-redux";
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import AdminSidebar from "../../layout/Sidebar/adminSidebar";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Panel from "../../layout/Panel";
import StepOne from "./Step1";
import StepTwo from "./Step2";
import StepThree from "./Step3";
import StepFour from "./Step4";
import StepFive from "./Step5";

class NewEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	currentStep: 1,
    	description: "",
    	propertyType: "",
    	listingType: "",
    	size: "",
    	featured: "",
    	yearBuilt: "",
    	price: "",
    	handler: "",
    	bedroom: "",
    	bathroom: "",
    	maxCapacity: "",
    	floors: "",
    	parking: "",
    	is_tv: "",
    	is_kitchen: "",
    	is_ac: "",
    	is_heating: "",
    	is_internet: "",
    	pets: "",
    	isActive: "",
    	address: "",
    	latitude: "",
    	longitude: ""
    };
  }

  onFormFieldChange = (e) =>{
		this.setState({ [e.target.name]: e.target.value });
  }
	
  onFormSubmit = (e) =>{
		e.preventDefault();
		const { description, propertyType, listingType, size, featured, yearBuilt, price, handler, bedroom, bathroom, maxCapacity, floors, parking, is_tv, is_kitchen, is_ac, is_heating, is_internet, pets, isActive, address, latitude, longitude } = this.state;
		
		const formData = { description, propertyType, listingType, size, featured, yearBuilt, price, handler, bedroom, bathroom, maxCapacity, floors, parking, is_tv, is_kitchen, is_ac, is_heating, is_internet, pets, isActive, address, latitude, longitude };

		console.log(formData);
  }

  onSelectChange = (e) =>{
  	this.setState({ [e.target.name]: e.target.value });
  }

  nextStep = (e) =>{
  	e.preventDefault();
  	let currentStep = this.state.currentStep;
  	currentStep = currentStep >= 4 ? 5 : currentStep + 1;
  	return this.setState({ currentStep });
  }

  prevStep = (e) =>{
  	e.preventDefault();
  	let { currentStep } = this.state;
  	currentStep = currentStep <= 1 ? 1 : currentStep - 1;
  	return this.setState({ currentStep });
  }

  nextStepButton = () =>{
  	const { currentStep } = this.state;
  	if(currentStep < 5){
  		return(
				<button className="btn btn-success pull-right" onClick={this.nextStep}>
	  			Next <i className="fa fa-arrow-right"></i>
	  		</button>
  		);
  	}
  	return null;
  }

  prevStepButton = () =>{
  	const { currentStep } = this.state;
  	if(currentStep !== 1){
  		return(
				<button className="btn btn-default pull-left" onClick={this.prevStep}>
	  			<i className="fa fa-arrow-left"></i> PREV
	  		</button>
  		);
  	}
  	return null;
  }

  render() {
		const { errors } = this.props;
		const { description, propertyType, listingType, size, featured, yearBuilt, price, handler,bedroom, bathroom, maxCapacity, floors, parking, is_tv, is_kitchen, is_ac, is_heating, is_internet, pets, isActive, address, latitude, longitude, currentStep } = this.state;

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
									<TransitionGroup component={null}>
										<CSSTransition in={currentStep === 1} classNames="displayStep" timeout={500}>
											<StepOne 
												currentStep={this.state.currentStep}
												onchange={this.onFormFieldChange}
												value={bedroom, bathroom, maxCapacity, price, yearBuilt, price, floors, parking, listingType, propertyType}
											/>
										</CSSTransition>
									</TransitionGroup>
									
									<TransitionGroup component={null}>
										<CSSTransition in={currentStep === 2} classNames="displayStep" timeout={500}>
											<StepTwo 
												currentStep={this.state.currentStep}
												onchange={this.onFormFieldChange}
												value={description, is_tv, is_ac, is_heating, is_internet, is_kitchen, pets}
											/>
										</CSSTransition>
									</TransitionGroup>
									
									<TransitionGroup component={null}>
										<CSSTransition in={currentStep === 3} classNames="displayStep" timeout={500}>
											<StepThree 
												currentStep={this.state.currentStep}
												onchange={this.onFormFieldChange}
												value={address,longitude, latitude}
											/>
										</CSSTransition>
									</TransitionGroup>
									
									<TransitionGroup component={null}>
										<CSSTransition in={currentStep === 4} classNames="displayStep" timeout={500}>
											<StepFour 
												currentStep={this.state.currentStep}
												onchange={this.onFormFieldChange}
											/>
										</CSSTransition>
									</TransitionGroup>
									
									<TransitionGroup component={null}>
										<CSSTransition in={currentStep === 5} classNames="displayStep" timeout={500}>
											<StepFive
												currentStep={this.state.currentStep}
												onchange={this.onFormFieldChange}
												deletePreviewImg={() => "hello"}
											/>
										</CSSTransition>
									</TransitionGroup>

									<div className="col-sm-12">
							  		{this.prevStepButton()}
							  		{this.nextStepButton()}
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