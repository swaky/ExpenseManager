var express = require("express");

var app=express();
var port=process.env.PORT || 3000;
var pg = require('pg');

bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var routes =require('./routes/taskRoutes');
routes(app);

app.listen(port);