var express = require("express");

var app=express();
var port=process.env.PORT || 3000;
var pg = require('pg');

var conString="postgres://eocivqdgabjhlc:223a89d1fc3932751d27389032fc8c7055d23879ef40302e23fffd5e44fdcfce@ec2-54-225-88-191.compute-1.amazonaws.com:5432/d66k8msq48v2b5";

const { Pool, Client } = require('pg')
const connectionString = 'postgres://eocivqdgabjhlc:223a89d1fc3932751d27389032fc8c7055d23879ef40302e23fffd5e44fdcfce@ec2-54-225-88-191.compute-1.amazonaws.com:5432/d66k8msq48v2b5'

const pool = new Pool({
  connectionString: connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  connectionString: connectionString,
})

app.get("/",function(req,res){

  //  res.send("welcome to node on heroku");
 
  client.connect()
  
  client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  })
});



app.listen(port);