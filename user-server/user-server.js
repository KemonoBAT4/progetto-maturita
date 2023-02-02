const express = require('express')
const { addAbortSignal } = require('stream')
const port = 8000
const app = express()

app.set("views", "./src/views")
app.set("view engine", "ejs")

const pageRoutes = require("./src/routes/page")


app.use("/", pageRoutes)

app.listen(port, ()=>{
    console.log("app listening on port: " + port)
})


