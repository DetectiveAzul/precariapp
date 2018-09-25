const MongoClient = require('mongodb').MongoClient;
const MONGO_URI = require('./config.js').uri;

module.exports = function(app) {
	MongoClient.connect(MONGO_URI, { useNewUrlParser: true })
		.then(async client => {
			const db = client.db('precaria');
			app.categories = db.collection('categories');
			app.customers = db.collection('customers');
			app.tickets = db.collection('tickets');
			app.users = db.collection('users');
			console.log('Database connection established');
		})
		.catch(err => console.error(err));
};
