const Router = require('koa-router');
const router = new Router();
const app = require('../server.js');
//Connection to DB
require('./db/mongo.js')(app);

router.get('/api/v1', async ctx => {
	ctx.body = {
		status: 'success',
		message: 'hello, world!'
	};
});

//TESTING DB BEFORE GOING FURTHER
router.get('/api/v1/categories', async ctx => {
	try {
		const categoryData = await app.categories.find().toArray();
		ctx.body = {
			status: 'success',
			data: categoryData
		};
	} catch (error) {
		ctx.body = {
			status: 'error',
			message: error.message || 'Sorry, an error has occurred.'
		};
	}
});

module.exports = router;
