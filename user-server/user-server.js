const express = require('express')
const { addAbortSignal } = require('stream')
const port = 8000
const app = express()

app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/js", express.static(__dirname + "public/js"))
app.use("/img", express.static(__dirname + "public/img"))

app.set("views", "./src/views")
app.set("view engine", "ejs")

const pageRoutes = require("./src/routes/page")

//note: you do not need the "/" before "css" because its already included above:

//rel="stylesheet" href="css/style.css


app.use("/", pageRoutes)

app.listen(port, ()=>{
    console.log("app listening on port: " + port)
})


