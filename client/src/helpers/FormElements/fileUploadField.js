import React from 'react';

const FileUpload = ({ onFileChange, title }) => {
  return (
    <div className="form-group pull-left">
			<span className="btn btn-info btn-file">
				<input type="file" name="photos" multiple={true} onChange={onFileChange}/>{title}
			</span>
		</div>
  );
};

FileUpload.displayName = 'FileUpload';

export default FileUpload;
