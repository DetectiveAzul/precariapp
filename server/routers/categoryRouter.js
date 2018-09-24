const Router = require('koa-router');
const router = new Router();

const app = require('../../server.js');
const BASE_URL = '/api/v1/categories';

router.get(`${BASE_URL}`, async ctx => {
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

router.get(`${BASE_URL}/:index`, async ctx => {
	try {
		const categoryData = await app.categories.find().toArray();
		if (ctx.params.index < categoryData.length) {
			ctx.status = 200;
			ctx.body = {
				status: 'success',
				data: categoryData[ctx.params.index]
			};
		} else {
			ctx.status = 404;
			ctx.body = {
				status: 'error',
				message: 'That element does not exist on the collection'
			};
		}
	} catch (error) {
		ctx.body = {
			status: 'error',
			message: error.message || 'Sorry, an error has ocurred.'
		};
	}
});

module.exports = router;
