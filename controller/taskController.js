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
        response.status(200).json({"expenses":res.rows[0]});
       // client.end()
      });
    
}

exports.create_task =function(request,response){
  const data = {uid:request.body.uid, name : request.body.name
  ,description : request.body.description
  ,amount : request.body.amount};

  pool.query('INSERT INTO TASKS(uid,name,description,amount) values($1, $2, $3, $4)',
  [data.uid,data.name,data.description,data.amount],(err,res)=>{
    if (err) {
      console.log(err.stack)

      response.json({"error":err});
    } else {
      console.log(res.rows[0])

      response.status(200).json({"result":res.rows[0]});
      // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
    
    
    }
  });

  response.status(200).json({"test":data});
        
}

exports.update_task=function(request,response)
{

}

exports.delete_task=function(request,response){

}