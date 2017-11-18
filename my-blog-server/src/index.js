require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const fs = require('fs');
const logger = require('koa-logger');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// const morgan = require('koa-morgan');

const app = new Koa();
const router = new Router();
const api = require('./api');

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
const { jwtMiddleware } = require('lib/token');


// Node 의 네이티브 Promise 사용
mongoose.Promise = global.Promise; 

app.use(logger());

//Router 적용코드보다 상단에 위치 필요
app.use(bodyParser());

//jwt 미들웨어 적용
app.use(jwtMiddleware);

// mongodb 연결
mongoose.connect(process.env.MONGO_URI, {
  useMongoClient: true
}).then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
});


router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('My server is listening to port 4000');
});
