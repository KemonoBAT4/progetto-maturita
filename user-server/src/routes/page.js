const express = require("express")
const pageRouter = express.Router()

pageRouter.get("/", async(req,res) => {
    
    res.render("index")
})

pageRouter.get("/settings", async(req,res) => {
    res.render("settings")
})

pageRouter.get("/login", async(req,res) => {

    res.render("login")
})

pageRouter.post("/test", function (req, res){
    
    fetch("localhost:5000/users/banana").then(res =>{

        return res.json();
    }).then(response=>{

        console.log(response)
    })

    res.send(JSON.stringify(req.body));
})

//ageRouter.get("/   ")
    //let ciao = 0

module.exports = pageRouter
