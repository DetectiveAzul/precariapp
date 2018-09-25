const Router = require('koa-router');
const router = new Router();
const ObjectID = require('mongodb').ObjectID;

const app = require('../../server.js');
const BASE_URL = '/api/v1/categories';

//GET /api/v1/categories
router.get(`${BASE_URL}`, async ctx => {
	try {
		const categoryData = await app.categories.find().toArray();
		ctx.status = 200;
		ctx.body = {
			status: 'success',
			message: `Got ${categoryData.length} entries`,
			data: categoryData
		};
	} catch (error) {
		ctx.status = 400;
		ctx.body = {
			status: 'error',
			message: error.message || 'Sorry, an error has occurred.'
		};
	}
});

//POST /api/v1/categories
router.post(`${BASE_URL}`, async ctx => {
	try {
		await app.categories.insertOne(ctx.request.body.data);
		const newEntry = await app.categories.findOne(ctx.request.body.data);
		ctx.status = 200;
		ctx.body = {
			status: 'success',
			message: `Posted new entry id: ${newEntry._id}`,
			data: newEntry
		};
	} catch (error) {
		ctx.status = 400;
		ctx.body = {
			status: 'error',
			message: error.message || 'Sorry, an error has ocurred.'
		};
	}
});

//GET /api/v1/categories/:index
router.get(`${BASE_URL}/:index`, async ctx => {
	try {
		const categoryData = await app.categories.find().toArray();
		if (ctx.params.index < categoryData.length) {
			ctx.status = 200;
			ctx.body = {
				status: 'success',
				message: `Retrieved object id: ${categoryData[ctx.params.index]._id}`,
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
		ctx.status = 400;
		ctx.body = {
			status: 'error',
			message: error.message || 'Sorry, an error has ocurred.'
		};
	}
});

//GET /api/v1/categories/id/:id
router.get(`${BASE_URL}/id/:id`, async ctx => {
	try {
		const id = ctx.params.id;
		const categoryData = await app.categories
			.find({ _id: ObjectID(id) })
			.toArray();
		if (categoryData) {
			ctx.status = 200;
			ctx.body = {
				status: 'success',
				message: `Retrieved object id: ${id}`,
				data: categoryData
			};
		} else {
			ctx.status = 404;
			ctx.body = {
				status: 'error',
				message: 'That element does not exist on the collection'
			};
		}
	} catch (error) {
		ctx.status = 400;
		ctx.body = {
			status: 'error',
			message: error.message || 'Sorry, an error has ocurred.'
		};
	}
});

//PUT /api/v1/categories/id/:id

//DELETE /api/v1/categories/id/:id
router.delete(`${BASE_URL}/id/:id`, async ctx => {
	try {
		const id = ctx.params.id;
		const entryToDelete = await app.categories.findOne({ _id: ObjectID(id) });
		if (entryToDelete) {
			await app.categories.deleteOne(entryToDelete);
			ctx.status = 200;
			ctx.body = {
				status: 'success',
				message: `Entry id ${id} deleted`
			};
		} else {
			ctx.status = 404;
			ctx.body = {
				status: 'error',
				message: 'That element does not exist on the collection'
			};
		}
	} catch (error) {
		ctx.status = 400;
		ctx.body = {
			status: 'error',
			message: error.message || 'Sorry, an error has occurred.'
		};
	}
});
module.exports = router;
