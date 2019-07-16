const express = require("express");
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app = express();
const path = require("path");
const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
};

// Middleware
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
  app.use(logger('dev'));
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Database Connection
require('./app/Database')();

// Models
require('./app/Models/User');
require('./app/Models/Property');
// require('./app/Models/Reservation');
// require('./app/Models/Report');

// Routes
app.use(require('./app/Routes/index'));
app.use('/api/auth', require('./app/Routes/api/auth'));
app.use('/api/admin', require('./app/Routes/api/admin'));
app.use('/api/users', require('./app/Routes/api/users'));
app.use('/api/properties', require('./app/Routes/api/properties'));
app.use(require('./app/Routes/api/reservations'));

// Serve static assets if in production env
if(process.env.NODE_ENV === 'production'){
	app.use(express.static('client/build'));

	app.get('*', (req, res) =>{
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
};

// SERVER
app.listen(port, () =>{
	console.log(`Server is live on port ${port}`);
});