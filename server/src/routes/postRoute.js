const routes = require('express').Router()
const controllers = require('../controllers/index')





routes.get("/posts", (req, res) => {
    console.log(res)
    res.send({hola: 'hola'}) 
})



// routes.post("/posts", (req, res) => {
//     console.log("post")
//     res.end("readyPost") 
// })


module.exports = routes