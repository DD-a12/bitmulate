const Router = require("koa-router");

const auth = new Router();

auth.get('/', (ctx) => {
    ctx.body = 'router set complete';
})

module.exports = auth