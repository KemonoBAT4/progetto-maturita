const express = require('express')
const mysql = require('mysql');

const port = 5000
const app = express()

let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "films"
});

app.post("/login/:userAndPassword", function(req, res){
  let text = req.userAndPassword
  let array = text.split("~")
  let username = array[0]
  let password = array[1]

  conn.query("select * from users where username = '" + username + "' and password = '"+ password + "'", function(err, result, fields){

    console.log(result)
    //return a specific record
    //console.log(result[2].address);

  })

})

app.get("/authors", function(req,res) {
    conn.query("select * from authors", function(err, result, fields){

      console.log(result)
        //return a specific record
        //console.log(result[2].address);
      res.status(200).end(JSON.stringify(result));
    })

});

app.get("/films", function(req,res) {

  conn.query("select * from films", function(err, result, fields){



      //return a specific record
      //console.log(result[2].address);

      res.status(200).end(JSON.stringify(result));
  })

});

app.get("/film/:name", function(req, res) {

  let name = req.name;
  conn.query("select * from films where name = " + name + "", function (err, result, fields) {
    //return a specific record
    //console.log(result[2].address);

    res.status(200).end(JSON.stringify(result));
  });

});





app.listen(port, ()=>{
    console.log("app listening on port: " + port)
})  