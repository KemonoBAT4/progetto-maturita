const fetch = require('node-fetch')
const mysql = require('mysql2')
const express = require("express")
const pageRouter = express.Router()

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "films"
}).promise()


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





    let query = "select * from users where nome = " + request 
})

//GET REQUEST FOR THE CHAMPIONS
pageRouter.get("/champions/:patch", async(req,res) => {
    let patch = req.params.patch
    console.log(patch)

    let url = 'http://ddragon.leagueoflegends.com/cdn/'+ patch +'/data/en_US/champion.json'

    let options = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    let response = await fetch(url, options).then(response => { return (response.json())})    

    response = response.data


    res.send(JSON.stringify(response))
})

pageRouter.get("/patch", async(req, res) => {

    let data = await fetch('https://ddragon.leagueoflegends.com/api/versions.json').then(version =>{return version.json()})
    
    res.send(JSON.stringify(data[0]))
})

//TESTS
pageRouter.get("/test", function (req, res){


})

module.exports = pageRouter
