const express = require("express")
const server = express()
const port = 3000
const routes = require("./routes")


server.set('view engine' , 'ejs');
//server.use(express.urlencoded({ extend: true }))

server.use(express.static("public"))

server.use(routes)

server.listen(port, () => console.log("Rodando"))

