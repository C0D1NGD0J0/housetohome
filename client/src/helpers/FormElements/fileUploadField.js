import React from 'react';

const FileUpload = ({ onFileUploadChange, title }) => {
  return (
    <div className="form-group pull-left">
			<span className="btn btn-info btn-file">
				<input type="file" name="photo" multiple={true} onChange={onFileUploadChange}/>{title}
			</span>
		</div>  
  );
};

FileUpload.displayName = 'FileUpload';

export default FileUpload;
