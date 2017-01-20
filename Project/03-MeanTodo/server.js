/**
 * Created by phuc.ngo on 20/01/2017.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var index = require('./routes/index');
var todo = require('./routes/todo');

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api/v1', todo);

app.listen(3000, function () {
    console.log('Server running at 3000');
});