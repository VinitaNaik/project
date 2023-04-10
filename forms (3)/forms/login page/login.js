
//database connection

const mysql = require('mysql');
const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root123",
  database:"typroject"

});

connection.connect((err) => {
  if (err) throw err;
  console.log('connected');
})