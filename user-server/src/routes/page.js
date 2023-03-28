const mysql = require('mysql2')

const express = require("express")
//const mysql = require('mysql')
const pageRouter = express.Router()


const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "films"
}).promise()
/*
let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "films"
});
*/
/*
conn.connect(function(err) {
    if (err) throw err
    console.log("Connected!")
})
*/

//GET REQUESTS FOR RENDERING PAGES
pageRouter.get("/", async(req,res) => {
    
    res.render("index")
})

pageRouter.get("/settings", async(req,res) => {
    res.render("settings")
})

pageRouter.get("/login", async(req,res) => {

    res.render("login")
})

//POST REQUEST FOR THE LOGIN AND THE REGISTER PART
pageRouter.post("/login/data", function (req, res){
    let username = req.body.username
    let password = req.body.password
    let query = "select * from users where username = '" + username + "' and password = '" + password + "'"

    pool.query(query).then(result =>{
        let data = result[0][0]

        if(data != null){
            if(data.username === username){
                res.send(JSON.stringify({"logged": true}));
            }else{
                res.send(JSON.stringify({"logged": false}));
            }
        }else{
            res.send(JSON.stringify({"logged": false}));
        }
    })
})

pageRouter.post("/register/data", function (req, res){
    let username = req.body.username
    let password = req.body.password
    let query = "select * from users where username = '" + username + "' and password = '" + password + "'"

    pool.query(query).then(result =>{
        let data = result[0][0]

        if(data != null){
            if(data.username === username){
                res.send(JSON.stringify({"logged": true}));
            }else{
                res.send(JSON.stringify({"logged": false}));
            }
        }else{
            res.send(JSON.stringify({"logged": false}));
        }
    })
})

//GET REQUESTS FOR OTHER PURPOSES
pageRouter.get("/user/data/:name", function (req, res){
    let request = req.body.name
    console.log("name: " + request)
    console.log("request: " + req.body)

    let query = "select * from users where nome = " + request 

    /*console.log("query: " + query)
    conn.query(query, function(err, result, fields){

        console.log(result)
        //console.log(err)
          //return a specific record
          //console.log(result[2].address);
        //res.status(200).end(JSON.stringify(result));
      })*/
    return req.body
    //RETURNING THE RESPONSE
    //res.send(JSON.stringify(response));
})





//TESTS
pageRouter.post("/test", function (req, res){
    let response = req.body

    //RETURNING THE RESPONSE
    res.send(JSON.stringify(response));
})

module.exports = pageRouter
