var express = require("express");

var app=express();
var port=process.env.PORT || 3000;
var pg = require('pg');



// const { Pool, Client } = require('pg')

// const connectionString =process.env.DATABASE_URL;
// const pool = new Pool({
//   connectionString: connectionString,
// })

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//  // pool.end()
// })

// const client = new Client({
//   connectionString: connectionString,
// })

/*
app.get("/",function(request,response){

  //  res.send("welcome to node on heroku");
 
 // client.connect()
  
  pool.query('SELECT * FROM TASKS', (err, res) => {
    console.log(err, res)
    response.status(200).json({"expenses":res.rows});
   // client.end()
  })
});

*/


var routes =require('./routes/taskRoutes');
routes(app);

app.listen(port);