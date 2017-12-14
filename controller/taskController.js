'use strict';


const { Pool, Client } = require('pg')

const connectionString =process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
})
//bodyParser = require('body-parser');

exports.list_all_tasks =function(request,response){

    pool.query('SELECT * FROM TASKS', (err, res) => {
        console.log(err, res)
        response.status(200).json({"expenses":res.rows});
       // client.end()
      });
    
}

exports.create_task =function(request,response){
  const data = {uid: request.body.uid, name : request.body.name};
  response.status(200).json({"test":data});
        
}

exports.update_task=function(request,response)
{

}

exports.delete_task=function(request,response){

}