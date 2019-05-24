const express = require("express");
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();
const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
};

// Middleware
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
};

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Database Connection
require('./app/Database')();

app.listen(port, () =>{
	console.log(`Server is live on port ${port}`);
});