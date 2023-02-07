const express = require("express")
const pageRouter = express.Router()

pageRouter.get("/", async(req,res) =>{

    //console.log(req.query)
    //let query = req.query.q
    //console.log(query)

    res.render("index")
})

pageRouter.get("/settings", async(req,res) =>{

    //console.log(req.query)
    //let query = req.query.q
    //console.log(query)

    res.render("settings")
})

pageRouter.get("/login", async(req,res) =>{

    //console.log(req.query)
    //let query = req.query.q
    //console.log(query)

    res.render("login")
})

//ageRouter.get("/   ")
//let ciao = 0

module.exports = pageRouter