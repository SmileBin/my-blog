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

const http = require('http');
const IO = require('socket.io');

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

// 5000 포트로 소켓을 연다
// const wsPort = process.env.WSPORT || 5000;
// const wsio = io.listen(wsPort, ()=> { console.log('Listening Websocket port ', wsPort)});

// connection이 발생할 때 핸들러를 실행한다.
/*
wsio.sockets.on('connection', function (socket) {
    // 클라이언트로 news 이벤트를 보낸다.
    socket.emit('news', { hello: 'world' });

    // 클라이언트에서 my other event가 발생하면 데이터를 받는다.
    socket.on('my other event', function (data) {
        console.log(data);
    });
});
// */

// io.attach(app);

// // app.io.on( event, eventHandler )

// // The raw socket.io instance is attached as app._io if you need it
// app.io.on( 'join',( ctx, data ) => {
//     console.log( 'join event fired', data );
// })



router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());


const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('My server is listening to port', port);
});



// const server = http.createServer(app.callback());
const io = IO(server);
// const wsPort = process.env.WSPORT || 5000;

io.on('connection', function (socket) {
    // 클라이언트로 news 이벤트를 보낸다.
    socket.emit('news', { hello: 'world' });

    // 클라이언트에서 my other event가 발생하면 데이터를 받는다.
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

server.on('listening', ()=>{
    console.log('Yahoo');
});
// server.listen(wsPort,'localhost');
