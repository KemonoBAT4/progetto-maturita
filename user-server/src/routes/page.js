//import fetch from 'node-fetch'

const express = require("express")
const fetch = require('cross-fetch')
const pageRouter = express.Router()


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
    let response = req.body

    //RETURNING THE RESPONSE
    res.send(JSON.stringify(response));
})

pageRouter.post("/register/data", function (req, res){
    let response = req.body

    //RETURNING THE RESPONSE
    res.send(JSON.stringify(response));
})

//GET REQUESTS FOR OTHER PURPOSES
pageRouter.post("/user/data/:name", function (req, res){
    let request = req.name

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
