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

class NewListing extends Component {
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
    	is_tv: false,
    	is_kitchen: false,
    	is_ac: false,
    	is_heating: false,
    	is_internet: false,
    	pets: false,
    	isActive: false,
    	address: "",
    	latitude: "",
    	longitude: "",
    	photos: []
    };
  }

  onFormFieldChange = (e) =>{
  	const { name, value } = e.target;
		return this.setState({ [name]: value });
  }

  onSelectChange = (e) =>{
  	const { name } = e.target;
  	return this.setState({ [name]: !this.state[name] });
  }
	
  onFormSubmit = (e) =>{
		e.preventDefault();
		const { currentStep, ...formData } = this.state;		
		console.log(formData);
  }

  nextStep = (e) =>{
  	e.preventDefault();
  	let { currentStep } =this.state;
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
  	if(currentStep <= 4){
  		return(
				<button className="btn btn-success pull-right" onClick={this.nextStep}>
	  			Next <i className="fa fa-arrow-right"></i>
	  		</button>
  		);
  	};
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
		const { photos, currentStep, ...values } = this.state;

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
												currentStep={currentStep}
												onchange={this.onFormFieldChange}
												value={this.state}
												error={errors && errors}
											/>
										</CSSTransition>
									</TransitionGroup>
									
									<TransitionGroup component={null}>
										<CSSTransition in={currentStep === 2} classNames="displayStep" timeout={500}>
											<StepTwo 
												currentStep={currentStep}
												onchange={this.onSelectChange}
												value={this.state}
												error={errors}
											/>
										</CSSTransition>
									</TransitionGroup>
									
									<TransitionGroup component={null}>
										<CSSTransition in={currentStep === 3} classNames="displayStep" timeout={500}>
											<StepThree 
												currentStep={currentStep}
												onchange={this.onFormFieldChange}
												value={this.state}
												error={errors}
											/>
										</CSSTransition>
									</TransitionGroup>
									
									<TransitionGroup component={null}>
										<CSSTransition in={currentStep === 4} classNames="displayStep" timeout={500}>
											<StepFour
												value={this.state.photos}
												error={errors}
												deletePreviewImg=""
												currentStep={currentStep}
												onchange={this.onFormFieldChange}
											/>
										</CSSTransition>
									</TransitionGroup>
									
									<TransitionGroup component={null}>
										<CSSTransition in={currentStep === 5} classNames="displayStep" timeout={500}>
											<StepFive currentStep={currentStep} values={values} />
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

export default connect(mapStateToProps, mapDispatchToProps)(NewListing);