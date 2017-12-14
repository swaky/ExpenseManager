var express = require("express");

var app=express();
var port=process.env.PORT || 3000;
var pg = require('pg');


const { Pool, Client } = require('pg')
//const connectionString = 'postgres://eocivqdgabjhlc:223a89d1fc3932751d27389032fc8c7055d23879ef40302e23fffd5e44fdcfce@ec2-54-225-88-191.compute-1.amazonaws.com:5432/d66k8msq48v2b5'

const connectionString =process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
 // pool.end()
})

const client = new Client({
  connectionString: connectionString,
})

app.get("/",function(request,response){

  //  res.send("welcome to node on heroku");
 
 // client.connect()
  
  pool.query('SELECT * FROM TASKS', (err, res) => {
    console.log(err, res)
    response.status(200).json({"expenses":res.rows});
   // client.end()
  })
});



app.listen(port);