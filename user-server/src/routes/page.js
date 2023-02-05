const express = require("express")
const pageRouter = express.Router()

pageRouter.get("/", async(req,res) =>{

    //console.log(req.query)
    //let query = req.query.q
    //console.log(query)

    res.render("index")
})


//ageRouter.get("/   ")
//let ciao = 0

module.exports = pageRouter