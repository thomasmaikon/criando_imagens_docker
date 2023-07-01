const express = require("express")
const mysql = require('mysql2')
const app = express()

var connection = mysql.createConnection({
    host:'db',
    user: 'root',
    password: 'test',
    database: 'sys'
})

connection.connect(function(err) {
  if (err) throw err;
  console.log("db connected!");
  
  /* connection.query("CREATE DATABASE IF NOT EXISTS sys", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  }); */

  const queryString = 'CREATE TABLE IF NOT EXISTS users ( username varchar(50) )'
  connection.query(queryString, function (err, result) {
    if (err) throw err;
    console.log("Table Created");
  });
});

app.post("/:username", function(req, res){
    const username = req.params.username
    const sqlquery = `INSERT INTO users ( username ) VALUES ('${username}')`
    connection.query(sqlquery, function(err, result){
        if (err) throw err;
        console.log("User inserted");
    })
    res.send()
})

app.get("/", function(req, res){
    
    const sqlquery = `SELECT * FROM users`
    connection.query(sqlquery, function(err, result, fields){
        if (err) throw err;
        const users = result.map(usr => usr.username)
        const output = `
            <h1>Full Cycle Rocks!</h1>
            ${users}
        `
       res.send(output);
    })
    
})


app.listen(3000,() => {
    console.log("Server running in 3000");
})