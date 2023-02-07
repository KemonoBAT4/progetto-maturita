const express = require('express')
const { addAbortSignal } = require('stream')
const port = 8000
const app = express()
const pageRoutes = require("./src/routes/page")

//STATIC DIRECTORY
app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/js", express.static(__dirname + "public/js"))
app.use("/img", express.static(__dirname + "public/img"))

//SETTING UP THE VIEW ENGINE
app.set("views", "./src/views")
app.set("view engine", "ejs")

//ROUTES
app.use("/", pageRoutes)
app.use("/settings", pageRoutes)
app.use("/login", pageRoutes)

//STARTING THE SERVER & LISTENING ON A SPECIFIC PORT
app.listen(port, ()=>{
    console.log("app listening on port: " + port)
})


