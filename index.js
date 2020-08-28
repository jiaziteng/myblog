const express=require("express");
const path=require("path");

const session=require("express-session");
const MongoStore=require("connect-mongo")(session);
const flash=require("connect-flash");
const config=require("./config/default");
const routes=require("./routes");
const pkg=require("./package.json")
const app=express();
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use(session({
  name:config.session.key,
  secret:config.session.secret,
  resave:true,// 是指每次请求都重新设置session cookie，假设你的cookie是10分钟过期，每次请求都会再设置10分钟
  saveUninitialized:false,// 是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.
  cookie:{
    maxAge:config.session.maxAge
  },
  store:new MongoStore({
    url: config.mongodb// mongodb 地址
  })
}))
app.use(flash());
// 设置模板全局常量
app.locals.blog = {
  title: pkg.name,
  description: pkg.description
}

// 添加模板必需的三个变量
app.use(function (req, res, next) {
  res.locals.user = req.session.user
  res.locals.success = req.flash('success')
  res.locals.error = req.flash('error')
  next()
})
routes(app);
app.listen(config.port,function(){
  console.log(`${pkg.name} listening on port ${config.port}`)
})
