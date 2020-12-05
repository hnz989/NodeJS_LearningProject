const express = require('express');
const path = require('path');
const mi = require('mongoimport');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');   // view engine 指明用什么 enging 去 render 动态的内容
app.set('views', 'views')       // views 则是指明动态内容的来源路径

app.use(bodyParser.urlencoded({exnteded: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);   //要注意 adminRoutes 和 shopRoutes 的顺序， 顺序错误会导致访问失效
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(3000);