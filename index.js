var express = require("express");

var app=express();
var port=process.env.PORT || 3000;
var pg = require('pg');

var conString="postgres://eocivqdgabjhlc:223a89d1fc3932751d27389032fc8c7055d23879ef40302e23fffd5e44fdcfce@ec2-54-225-88-191.compute-1.amazonaws.com:5432/d66k8msq48v2b5";





app.get("/",function(req,res){

  //  res.send("welcome to node on heroku");
  pg.connect(conString, function(err, client, done) {
    console.log(err+"!!!!!!!!!!!!!!!");
   client.query('SELECT NOW()', function(err, result) {
     done();
     if(err) return console.error(err);
     console.log(result.rows);
     res.send(result.rows);
   });
 });
  
   
});



app.listen(port);