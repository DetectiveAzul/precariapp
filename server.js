const Koa = require('koa');
//Midleware
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const logger = require('koa-logger');

//Initialization
const app = new Koa();
const PORT = process.env.PORT || 3000;
const router = require('./server/index.js');

//Koa using
app.use(cors());
app.use(bodyParser());
app.use(logger());
app.use(router.routes());
app.use(serve(__dirname + '/client/public'));

//Start listening
const server = app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});

//Exporting
module.exports = server;
