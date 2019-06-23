const isProduction = (process.env.NODE_ENV === "production");
const User = require("../Models/User");
const Property = require("../Models/Property");
const faker = require("faker");
const bcrypt = require("bcryptjs");
const BOOLEAN_VALUES = [true, false];
const PROPERTY_TYPE = ["condominium", "house", "office", "land", "apartment"];
const LISTING_TYPE = ["sale", "rent", "lease"];
const USER_ROLES = ['guest', 'employee'];
const salt = bcrypt.genSaltSync(10);
let x = 0;

if(!isProduction){
	// while (x < 5){
	// 	User.create({
	// 		firstName: faker.name.firstName(),
	// 		lastName: faker.name.lastName(),
	// 		email: faker.internet.email(),
	// 		active: true,
	// 		phone: faker.phone.phoneNumber().length > 10 ? "1234567890" : aker.phone.phoneNumber(),
	// 		password: bcrypt.hashSync("password", salt),
	// 		isAdmin: BOOLEAN_VALUES[Math.floor(Math.random() * Math.floor(BOOLEAN_VALUES.length))],
	// 		role: USER_ROLES[Math.floor(Math.random() * Math.floor(USER_ROLES.length))]
	// 	});
	// 	x++;
	// };
	
	// while(x < 3){
	// 	User.find({role: "employee"}).limit(4).then( async (users) =>{
	// 		const property = new Property({
	// 			description: faker.lorem.paragraphs(),
	// 			propertyType: PROPERTY_TYPE[Math.floor(Math.random() * Math.floor(PROPERTY_TYPE.length))],
	// 			listingType: LISTING_TYPE[Math.floor(Math.random() * Math.floor(LISTING_TYPE.length))],
	// 			size: faker.random.number(),
	// 			yearBuilt: 2005,
	// 			price: faker.commerce.price() * 1000,
	// 			featured: BOOLEAN_VALUES[Math.floor(Math.random() * Math.floor(BOOLEAN_VALUES.length))],
	// 			handler: users[Math.floor(Math.random() * Math.floor(users.length))].id,
	// 			isActive: true
	// 		});

	// 		property.features = {
	// 			bedroom: Math.floor(Math.random() * Math.floor(7)),
	// 			bathroom: Math.floor(Math.random() * Math.floor(7)),
	// 			maxCapacity: Math.floor(Math.random() * Math.floor(7)),
	// 			floors: Math.floor(Math.random() * Math.floor(3)) <= 0 ? Math.floor(Math.random() * Math.floor(3)) + 1 : Math.floor(Math.random() * Math.floor(3)),
	// 			parking: Math.floor(Math.random() * Math.floor(4)),
	// 		};

	// 		property.extras = {
	// 			is_tv: BOOLEAN_VALUES[Math.floor(Math.random() * Math.floor(BOOLEAN_VALUES.length))],
	// 			is_kitchen: BOOLEAN_VALUES[Math.floor(Math.random() * Math.floor(BOOLEAN_VALUES.length))],
	// 			is_ac: BOOLEAN_VALUES[Math.floor(Math.random() * Math.floor(BOOLEAN_VALUES.length))],
	// 			is_heating: BOOLEAN_VALUES[Math.floor(Math.random() * Math.floor(BOOLEAN_VALUES.length))],
	// 			is_internet: BOOLEAN_VALUES[Math.floor(Math.random() * Math.floor(BOOLEAN_VALUES.length))],
	// 			pets: BOOLEAN_VALUES[Math.floor(Math.random() * Math.floor(BOOLEAN_VALUES.length))]
	// 		};

	// 		property.location.address = faker.address.streetAddress();
	// 		property.location.coordinates[0] = Number(faker.address.longitude());
	// 		property.location.coordinates[1] = Number(faker.address.latitude());
			
	// 		// console.log(property);
	// 		property.save();
	// 	}).catch((err) =>{
	// 		console.log(err);
	// 	});

	// 	x++;
	// };
	
	// User.countDocuments({}).then((c) => console.log("User count: ", c));
};