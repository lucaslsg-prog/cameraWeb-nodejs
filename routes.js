const express = require("express")
const routes = express.Router()
const path = __dirname + '/views/'

routes.get('/', (req,res) => {
    res.render(path + 'index');
})

routes.get('/teste', (req,res) => {
    res.render(path + 'teste')
})
module.exports = routes;