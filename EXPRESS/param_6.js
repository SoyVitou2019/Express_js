const express = require('express')

const app = express.Router()

// combined params and regular expression (regex)
app.get('/:setting/:lesson*?',(req,res)=>{
    res.send(`${req.params.setting} : ${req.params.lesson} `)
})

module.exports = app