const express = require('express')
const app = express()
const module_test = require('./module_test_1');

// -- middleware function next()
/*
app.use((req,res,next)=>{
    next()
    res.send(module_test)
})
app.use((req,res)=>{
    console.log("Serve")
})
*/
// express static middleware : use for clients can access files in folders your static files
app.use(express.static('static'))
// send Hello 
app.use((req,res)=>{
    res.send(module_test)
})
// error handling
app.use((err,req,res,next)=>{
    // res.send(`${err.name} : ${err.message}`)
    res.send("<h1>ទំព័របច្ចុប្បន្ននេះកំពុងមានបញ្ហា</h1>")
})


.listen(8080,()=>{
    console.log("Serve at Port : 8080")
})