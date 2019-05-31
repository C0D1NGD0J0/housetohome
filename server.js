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

// Models
require('./app/Models/Employee');
require('./app/Models/Property');
// require('./app/Models/Report');
// require('./app/Models/Reservation');

// Routes
app.use(require('./app/Routes/index'));
app.use('/api/auth', require('./app/Routes/api/auth'));
app.use('/api/admin', require('./app/Routes/api/admin'));
app.use('/api/employees', require('./app/Routes/api/employees'));
app.use('/api/properties', require('./app/Routes/api/properties'));
app.use('/api/bookings', require('./app/Routes/api/reservations'));

app.listen(port, () =>{
	console.log(`Server is live on port ${port}`);
});