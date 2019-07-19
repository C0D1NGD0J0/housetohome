import React, { Fragment } from 'react';
import FileUpload from "../../../helpers/FormElements/fileUploadField";
import ImagePreview from "./ImgPreview";
import house_1 from "../../../assets/img/house_1.jpg";

const StepFour = ({ value, currentStep, onchange }) => {
	if(currentStep !== 4) return null;

  return (
		<Fragment>
			<div className="imgPreview-wrapper">
				<ImagePreview deletePreviewImg="" source={house_1} />
			</div><br/>
			
			<div className="col-sm-12">
				<FileUpload title="Upload Photos" onFileChange={onchange} name={value} />
			</div>
		</Fragment>
  );
};

StepFour.displayName = 'StepFour';

export default StepFour;