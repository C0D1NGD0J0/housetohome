const multer = require("multer");
const cloudinary = require('cloudinary');
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = cloudinaryStorage({
	cloudinary: cloudinary,
	folder: "listingImages",
	allowedFormats: ["jpg", "png", "jpeg"],
	filename: function(req, file, cb){
		cb(null, Date.now() +"_"+ file.originalname);
	},
	transformation: [{ width: 500, height: 500, crop: "limit" }]
});

const parser = multer({ storage: storage }).array('photos', 10);

const uploadImg = function(req, res, next){
	parser(req, res, (err) =>{
		if(err instanceof multer.MulterError || err){
			console.log("UPLOAD-Error: ",err);
			return res.status(400).json(err);
		};
		
		next();
	});
};

module.exports = { uploadImg };