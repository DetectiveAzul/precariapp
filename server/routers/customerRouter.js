const Router = require('koa-router');
const router = new Router();
const ObjectID = require('mongodb').ObjectID;

const app = require('../../server.js');
const BASE_URL = '/api/v1/customers';

//GET /api/v1/customers
router.get(`${BASE_URL}`, async ctx => {
	try {
		const customerData = await app.customers.find().toArray();
		ctx.status = 200;
		ctx.body = {
			status: 'success',
			message: `Got ${customerData.length} entries`,
			data: customerData
		};
	} catch (error) {
		ctx.status = 400;
		ctx.body = {
			status: 'error',
			message: error.message || 'Sorry, an error has occurred.'
		};
	}
});

//POST /api/v1/customers
router.post(`${BASE_URL}`, async ctx => {
	try {
		await app.customers.insertOne(ctx.request.body.data);
		const newEntry = await app.customers.findOne(ctx.request.body.data);
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

//GET /api/v1/customers/:index
router.get(`${BASE_URL}/:index`, async ctx => {
	try {
		const customerData = await app.customers.find().toArray();
		if (ctx.params.index < customerData.length) {
			ctx.status = 200;
			ctx.body = {
				status: 'success',
				message: `Retrieved object id: ${customerData[ctx.params.index]._id}`,
				data: customerData[ctx.params.index]
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

//GET /api/v1/customers/id/:id
router.get(`${BASE_URL}/id/:id`, async ctx => {
	try {
		const id = ctx.params.id;
		const customerData = await app.customerData
			.find({ _id: ObjectID(id) })
			.toArray();
		if (customerData) {
			ctx.status = 200;
			ctx.body = {
				status: 'success',
				message: `Retrieved object id: ${id}`,
				data: customerData
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

//PUT /api/v1/customers/id/:id
router.put(`${BASE_URL}/id/:id`, async ctx => {
	try {
		const id = ctx.params.id;
		const newInfo = ctx.request.body.data;
		await app.customers.updateOne(
			{ _id: ObjectID(id)},
			{ $set: newInfo },
			{ upsert: true }
		);
		const updatedCustomer =  await app.customers.findOne({_id: ObjectID(id)});
		ctx.status = 200;
		ctx.body = {
			status: 'success',
			message: `Updated object id ${id} successfully`,
			data: updatedCustomer
		};
	} catch (error) {
		ctx.status = 400;
		ctx.body = {
			status: 'error',
			message: error.message || 'Sorry, an error has ocurred.'
		};
	}
});

//DELETE /api/v1/customers/id/:id
router.delete(`${BASE_URL}/id/:id`, async ctx => {
	try {
		const id = ctx.params.id;
		const entryToDelete = await app.customers.findOne({ _id: ObjectID(id) });
		if (entryToDelete) {
			await app.customers.deleteOne(entryToDelete);
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
