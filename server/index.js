const Router = require('koa-router');
const router = new Router();
const app = require('../server.js');
const fs = require('fs');
const path = require('path');
//Importing routers
const categoryRouter = require('./routers/categoryRouter.js');
const userRouter = require('./routers/userRouter.js');
const customerRouter = require('./routers/customerRouter.js');
const ticketRouter = require('./routers/ticketRouter.js');

//Connection to DB
require('./db/mongo.js')(app);

//Index Routes
router.get('/:container', async function(ctx) {
	var html = fs.readFileSync(path.resolve('./client/public/index.html'));
	ctx.type = 'html';
	ctx.body = html;
});

router.get('/api/v1', async ctx => {
	ctx.body = {
		status: 'success',
		message: 'hello, world!'
	};
});

//Re-routing
router.use(categoryRouter.routes());
router.use(userRouter.routes());
router.use(customerRouter.routes());
router.use(ticketRouter.routes());

module.exports = router;
