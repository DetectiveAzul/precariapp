const Koa = require('koa');
const app = new Koa();

const PORT = process.env.PORT || 3001 ;

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});