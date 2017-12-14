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

  //response.status(200).json({"test":data});
        
}

exports.update_task=function(request,response)
{
  const data = {uid:request.body.uid, name : request.body.name
    ,description : request.body.description
    ,amount : request.body.amount};
  
    pool.query('UPDATE TASKS SET name=($1),description=($2),amount=($3) WHERE uid=($4)',
    [data.name,data.description,data.amount,data.uid],(err,res)=>{
      if (err) {
        console.log(err.stack)
  
        response.json({"error":err});
      } else {
        console.log(res.rows[0])
  
        response.status(200).json({"result":"update successful"});
        // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
      
      
      }
    });

}

exports.delete_task=function(request,response){

}