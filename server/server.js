const Koa = require('koa');
const route = require('koa-route');
const path = require('path');
const serve = require('koa-static');

const app = new Koa();
const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
  next();
}
app.use(logger);
// app.use(serve(path.join(__dirname)));
const about = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = '<a href="/">Index Page</a>';
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};
app.use(route.get('/', main));
app.use(route.get('/about', about));
app.listen(9000);
