const express = require('express')
const fetch = require('node-fetch')
const { addAbortSignal } = require('stream')
const port = 8000
const app = express()
const pageRoutes = require("./src/routes/page")

app.use(express.json());
app.use(express.urlencoded());


//---------------STATIC DIRECTORY---------------//
app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/js", express.static(__dirname + "public/js"))
app.use("/img", express.static(__dirname + "public/img"))
//----------------------------------------------//


//---SETTING UP THE VIEW ENGINE---//
app.set("views", "./src/views")
app.set("view engine", "ejs")
//--------------------------------//


//---------------ROUTES---------------//

//ROUTES FOR RENDERING PAGES
app.use("/", pageRoutes)
app.use("/settings", pageRoutes)
app.use("/login", pageRoutes)
app.use("/register", pageRoutes)

//ROUTES FOR THE LOGIN AND REGISTER DATA
app.use("/register/data", pageRoutes)
app.use("/login/data", pageRoutes)

//ROUTES FOR OTHER DATA TYPE
app.use("/user/data/:name", pageRoutes)
app.use("/champions", pageRoutes)
app.use("/patch", pageRoutes)
app.use

//ROUTE USED FOR TESTS
app.use("/test", pageRoutes)

//------------------------------------//

//STARTING THE SERVER & LISTENING ON A SPECIFIC PORT
app.listen(port, ()=>{
    console.log("app listening on port: " + port)
})
