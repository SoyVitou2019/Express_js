var express = require('express');
var module_test = require('./testing_node/module_test');

express()
    .get('/',function(req, res){
        res.send(module_test)
    })
    .get(/.*/, function (req, res) {
        res.status(404).send(req.url)
    })
    .listen(8080)