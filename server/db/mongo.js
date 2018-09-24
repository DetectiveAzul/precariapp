const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = require('./config.js').uri;

module.exports = function(app) {
	MongoClient.connect(MONGO_URL)
		.then(connection => {
			app.categories = connection.collection('categories');
			console.log('Database connection established');
		})
		.catch(err => console.error(err));
};
