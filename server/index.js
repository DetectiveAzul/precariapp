const Router = require('koa-router');
const router = new Router();
const app = require('../server.js');
//Importing routers
const categoryRouter = require('./routers/categoryRouter.js'); 
const userRouter = require('./routers/userRouter.js');
const customerRouter = require('./routers/customerRouter.js');
const ticketRouter = require('./routers/ticketRouter.js');


//Connection to DB
require('./db/mongo.js')(app);

//Index Routes
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
