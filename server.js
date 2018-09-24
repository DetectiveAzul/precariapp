const Koa = require('koa');
const app = new Koa();
const router = require('./server/index.js');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const PORT = process.env.PORT || 3000;

app.use(cors);
app.use(bodyParser);
app.use(router.routes());

const server = app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
