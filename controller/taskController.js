'use strict';


const { Pool, Client } = require('pg')

const connectionString =process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
})

exports.list_all_tasks =function(request,response){

    pool.query('SELECT * FROM TASKS', (err, res) => {
        console.log(err, res)
        response.status(200).json({"expenses":res.rows});
       // client.end()
      })
}