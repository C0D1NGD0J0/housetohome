import React from 'react';

const ImagePreview = ({ source, deletePreviewImg }) => {
  return (
  	<div className="img-preview">
			<div className="overlay"></div>
			<img src={source} className="img-responsive" alt="listing-img-preview" />
			<i className="fa fa-trash" onClick={deletePreviewImg}></i>
		</div>
  );
};

ImagePreview.displayName = 'ImagePreview';

export default ImagePreview;