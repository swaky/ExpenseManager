var express = require("express");

var cors = require('cors');


var app=express();
var port=process.env.PORT || 3000;
var pg = require('pg');



app.use(cors());

bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var routes =require('./routes/taskRoutes');
routes(app);

app.listen(port);