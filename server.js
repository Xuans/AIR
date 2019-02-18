//lib
const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');

const fs = require('fs');
const https = require('https');
const router=require('koa-router')();
const koaBody = require('koa-body');

//services
const error404=require('./server/error/404');
const loginV1=require('./server/api/v1/login');
const uploadFile=require('./server/api/v1/upload');


const config={
    port:7007,
    path:path.join(__dirname,'./target/webapp/')
};

const app = new Koa();

//redirect index
router.get('/',async (ctx,next)=> {
	ctx.response.type = 'html';
	ctx.response.body = await fs.readFileSync(config.path + './module/index/index.html', 'utf8');
});

//登录模块
router.post('/getCSRFToken.do',loginV1.getCSRFToken);

router.post('/uploadFile.do',uploadFile(config));


//parser
app.use(koaBody({
	multipart: true
}));

//static server
const main = serve(config.path);
app.use(main);
app.use(router.routes());


//异常处理
app.use(error404);
//捕获异常记录错误日志
app.on("error",(err,ctx)=>{console.log(new Date(),":",err);});






//https
https.createServer({
    key: fs.readFileSync(config.path+'./ssl/214543595410729.key','utf8'),
    cert: fs.readFileSync(config.path+'./ssl/214543595410729.crt','utf8')
}, app.callback()).listen(config.port);

//success
console.log(`启动 http://localhost:7007 ${config.path} 成功！`);
