var express = require("express");

var app=express();
var port=process.env.PORT || 3000;


const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});



app.get("/",function(req,res){

  //  res.send("welcome to node on heroku");

    client.connect();
    
    client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
      if (err) throw err;
      for (let row of res.rows) {
        console.log(JSON.stringify(row));
    res.send(JSON.stringify(row))  
    }
      client.end();
    });
});



app.listen(port);