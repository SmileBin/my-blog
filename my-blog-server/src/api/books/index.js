const Router = require('koa-router');

const books = new Router();
const bookCtrl = require('./books.controller');
const handler = (ctx, next) => {
    // ctx.body = `${ctx.request.method} ${ctx.request.path}`;
    console.log(ctx.request.body);
};

books.get('/:id', bookCtrl.get);
books.get('/', bookCtrl.list);
books.post('/', bookCtrl.create);
books.delete('/', bookCtrl.delete);
books.put('/:id', bookCtrl.replace);
books.patch('/:id', bookCtrl.update);

module.exports = books;