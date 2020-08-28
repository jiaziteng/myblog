const config = require('config-lite')(__dirname)
const Mongoose = require('mongoose');
Mongoose.connect(config.mongodb,{
  useNewUrlParser: true
});
Mongoose.connection.on('error', function (err) {
  console.log('-----连接数据库失败-----' + err);
});
Mongoose.connection.once('open', function() {
  // we're connected!
});
