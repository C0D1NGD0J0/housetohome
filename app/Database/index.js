const mongoose = require("mongoose");
const isProduction = (process.env.NODE_ENV === "production");
mongoose.Promise = global.Promise;

const connectDB = async () =>{
	try {
		if(isProduction){
			await mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
			return console.log("Connected to remote database");
		} else{
			await mongoose.connect(process.env.LOCALDB_URI, {useNewUrlParser: true});
			return console.log("Connected to local database");
		}		
	} catch(err) {
		console.log("Database Connection Error: ", err);	
		process.exit(1); //exit process with failure
	};
};

module.exports = connectDB;