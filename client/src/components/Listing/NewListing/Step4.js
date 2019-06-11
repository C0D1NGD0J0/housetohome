import React, { Fragment } from 'react';
import InputField from "../../../helpers/FormElements/inputField";
import SelectTag from "../../../helpers/FormElements/selectField";
import FileUpload from "../../../helpers/FormElements/fileUploadField";
import CheckboxField from "../../../helpers/FormElements/checkboxField";
import TextAreaField from "../../../helpers/FormElements/textAreaField";
import Panel from "../../layout/Panel";
import ImagePreview from "./ImgPreview";
import house_1 from "../../../assets/img/house_1.jpg";

const StepFour = (props) => {
  return (
		<Fragment>
			<div className="col-sm-3">
				<ImagePreview deletePreviewImg="" source={house_1} />
			</div>

			<div className="col-sm-3">
				<ImagePreview deletePreviewImg="" source={house_1} />
			</div>

			<div className="col-sm-3">
				<ImagePreview deletePreviewImg="" source={house_1} />
			</div>

			<div className="col-sm-3">
				<ImagePreview deletePreviewImg="" source={house_1} />
			</div>
			
			<div className="col-sm-12">
				<FileUpload title="Upload Photos" onFileUploadChange="" />
			</div>

			<div className="col-sm-12">
				<div className="form-group">
					<input type="submit" value="Add New Listing" className="btn btn-green pull-right" />
					<input type="reset" value="Clear Form" className="btn btn-danger" />
				</div>
			</div>
		</Fragment>
  );
};

StepFour.displayName = 'StepFour';

export default StepFour;