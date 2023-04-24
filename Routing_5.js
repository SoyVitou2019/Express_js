const express = require('express')
const app = express()

const param = require('./EXPRESS/param_6')
app.use(param)

const account = require('./EXPRESS/account_5')
app.use('/account',account)

// using GET Methods
app.get('/',(req,res)=>{
    res.send("Using Get Methods")
})

// using POST Methods
app.post('/',(req,res)=>{
    res.send("Using Post Methods")
})

// using M-SEARCH Method's http
app['m-search']((req,res)=>{

})
.listen(8080,()=>{
    console.log("Server at Port : 8080...")
})

// using Method Router()
/*
app.route('/')
    // using GET Methods
    .get((req,res)=>{
        res.send("Using Get Methods")
    })

    // using POST Methods
    .post((req,res)=>{
        res.send("Using Post Methods")
    })
.listen(5000,()=>{
    console.log("Serve at Port : 5000...")
})*/