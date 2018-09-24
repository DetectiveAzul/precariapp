const Koa = require('koa');
//Midleware
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
//Initialization
const app = new Koa();
const PORT = process.env.PORT || 3000;
const router = require('./server/index.js');

//Koa using
app.use(cors());
app.use(bodyParser());
app.use(router.routes());

//Start listening
const server = app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});

//Exporting
module.exports = server;
