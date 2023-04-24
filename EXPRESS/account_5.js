const express = require('express')

const app = express.Router()

app.get('/setting',(req,res)=> res.send("Setting Rout"))
app.get('/profile',(req,res)=> res.send("profile Rout"))

module.exports = app