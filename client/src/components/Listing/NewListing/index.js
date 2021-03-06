import React, { Component } from 'react';
import { connect } from "react-redux";
import ContentWrapper from "../../layout/ContentWrapper";
import SidebarWrapper from "../../layout/Sidebar";
import { creatLisitngAction, getAllUsers, updateListingAction } from "../../../actions/adminAction";
import { getListingAction } from "../../../actions/listingAction";
import AdminSidebar from "../../layout/Sidebar/adminSidebar";
import UserSidebar from "../../layout/Sidebar/userSidebar";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Panel from "../../layout/Panel";
import StepOne from "./Step1";
import StepTwo from "./Step2";
import StepThree from "./Step3";
import StepFour from "./Step4";
import StepFive from "./Step5";
import Geocode from 'react-geocode';
import FormNavigation from "./formNavigation";

class NewListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	currentStep: 1,
    	description: "",
    	propertyType: "",
    	listingType: "",
    	size: "",
    	featured: false,
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
    	is_gym: false,
			is_laundry: false,
			swimming_pool: false,
    	pets: false,
    	isActive: false,
    	address: "",
    	latitude: "",
    	longitude: "",
    	photos: null
    };
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_APIKEY);
  }

  async componentDidMount(){
  	const { info, isAuthenticated } = this.props.currentuser;
  	const { id } = this.props.match.params;
  	
  	if(!isAuthenticated){
			return this.props.history.push("/login");
  	};

  	if(info && info.isadmin){
  		this.props.getAllUsers("employee");
  	};

  	if(id && id.length === 24){
  		await this.props.getListingAction(id, true);
  	};
  }
	
	componentDidUpdate(previousProps){
		const { id } = this.props.match.params;
		if(id && id.length === 24){
			this.populateInitialValues(previousProps);
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
		const fd = new FormData();
		const { id } = this.props.match.params;
		const { currentStep, ...listingData } = this.state;

		if(listingData.photos !== null && listingData.photos.length > 0){
			for(let i = 0; i < listingData.photos.length; i++){
				fd.append("photos", listingData.photos[i]);
				this.setState({photos: null});
			};
		};
		
		for(let item in listingData){
			fd.append(item, listingData[item]);
		};

		if(id && id.length === 24){
			return this.props.updateListingAction(id, fd);
  	};
		
		return this.props.creatLisitngAction(fd);
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
  	const { id } = this.props.match.params;

  	if(currentStep <= 4){
  		return(
				<button className="btn btn-success pull-right" onClick={this.nextStep}>
	  			Next <i className="fa fa-arrow-right"></i>
	  		</button>
  		);
  	} else {
  		return(
				<button className="btn btn-green pull-right" onClick={this.onFormSubmit}>
	  			<i className="fa fa-arrow-check"></i> {id ? "Update Listing" : "Create Listing"}
	  		</button>
  		);
  	};
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

  populateInitialValues = (previousProps) =>{
  	const { id } = this.props.match.params;
  	let { show: currentListing } = this.props.listings;
  	let { show: previousCurrentListing } = previousProps.listings;
		currentListing = currentListing && currentListing.property;
		previousCurrentListing = previousCurrentListing && previousCurrentListing.property;

		if(id && currentListing && JSON.stringify(previousCurrentListing) !== JSON.stringify(currentListing)){
			this.setState({
				description: currentListing.description,
				propertyType: currentListing.propertyType, 
				listingType: currentListing.listingType, 
				size: currentListing.size, 
				featured: currentListing.featured,
				yearBuilt: currentListing.yearBuilt,
				price: currentListing.price,
				handler: currentListing.handler._id,
				bedroom: currentListing.features.bedroom,
				bathroom: currentListing.features.bathroom,
				maxCapacity: currentListing.features.maxCapacity,
				floors: currentListing.features.floors,
				parking: currentListing.features.parking,
				is_tv: currentListing.extras.is_tv,
				is_kitchen: currentListing.extras.is_kitchen,
				is_ac: currentListing.extras.is_ac,
				is_heating: currentListing.extras.is_heating,
				is_internet: currentListing.extras.is_internet,
				pets: currentListing.extras.pets,
				is_gym: currentListing.extras.is_gym,
				is_laundry: currentListing.extras.is_laundry,
				swimming_pool: currentListing.extras.swimming_pool,
				isActive: currentListing.isActive,
				address: currentListing.location.address,
				latitude: currentListing.location.coordinates[0],
				longitude: currentListing.location.coordinates[1]
			});
  	};
  }
	
	updateCurrentStep = (num) =>{
		this.setState({ currentStep: num });
	}

  getGeoCodeFromAddress = async (e) =>{
  	if(e.keyCode === 13 && e.target.name === 'address'){
  		e.preventDefault();
			await Geocode.fromAddress(this.state.address).then(
			  response => {
			  	const { formatted_address } = response.results[0];
			  	const { lat, lng } = response.results[0].geometry.location;
			    this.setState({latitude: lat, longitude: lng, address: formatted_address});
			  },
			  error => {
			    console.error(error);
			  }
			);
  	};
  }
	
	fileSelectHandler = (e) =>{
		if(this._validateFileSize(e)){
			this.setState({photos: e.target.files});
		};
	}

	_validateFileSize = (e) =>{
  	const files = e.target.files;
  	const MAXSIZE = 1000000 * 5;
  	let total = 0;
		let error = "";

  	for(let i = 0; i < files.length; i++){
			total += files[i].size;
  	};

  	if(total > MAXSIZE){
  		error += "Your files are too large, total max size allowed 5MB";
  		e.target.value = null;
  		return false;
  	}

  	return true;
	}

  render() {
		const { errors, listings: { all, show }, currentuser: { info }, employees } = this.props;
		const { currentStep, ...values } = this.state;
		
    return(
    	<ContentWrapper containerClass="container">
				<div className="row">
					<div className="col-xs-4 col-sm-3">
						<SidebarWrapper>
							{
								(info && info.isadmin) ? <AdminSidebar user={info}/> : <UserSidebar user={info} />
							}
						</SidebarWrapper>
					</div>

					<div className="col-xs-8 col-sm-9">
						<Panel title="New Listing">
							<FormNavigation 
								navItems={["General Info", "Description", "Address", "Photos", "Save"]}
								updateCurrentStep={this.updateCurrentStep}
							/>

							<form onSubmit={this.onFormSubmit} className="form">
								<div className="row">
									<TransitionGroup component={null}>
										<CSSTransition in={currentStep === 1} classNames="displayStep" timeout={500}>
											<StepOne 
												currentStep={currentStep}
												onchange={this.onFormFieldChange}
												value={this.state}
												error={errors}
												options={employees}
												isAdmin={info && info.isadmin}
											/>
										</CSSTransition>
									</TransitionGroup>
									
									<TransitionGroup component={null}>
										<CSSTransition in={currentStep === 2} classNames="displayStep" timeout={500}>
											<StepTwo 
												currentStep={currentStep}
												onchange={this.onFormFieldChange}
												checkBoxChange={this.onSelectChange}
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
												fn={this.getGeoCodeFromAddress}
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
												onchange={this.fileSelectHandler}
											/>
										</CSSTransition>
									</TransitionGroup>
									
									<TransitionGroup component={null}>
										<CSSTransition in={currentStep === 5} classNames="displayStep" timeout={500}>
											<StepFive currentStep={currentStep} values={values} error={errors}/>
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
	currentuser: state.user,
	listings: state.admin.listings,
	errors: state.errors,
	employees: state.admin.users.all
});

const mapDispatchToProps = {
	creatLisitngAction,
	getAllUsers,
	getListingAction,
	updateListingAction
};

export default connect(mapStateToProps, mapDispatchToProps)(NewListing);