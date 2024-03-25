const mysql = require('mysql')

const connection = mysql.createPool({
  connectionLimit : 100,
  host: 'localhost',
  user: 'root',
  password:"",
  database: "crm"
})


connection.getConnection(function(error, pool){
  if(error) return console.log('error : ', error.sqlMessage);
  console.log('Connected to the Mysql database')
  pool.release();
})


module.exports = connection;