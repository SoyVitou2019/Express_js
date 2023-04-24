// const tst = require("module").builtinModules
// console.log(tst)

var http = require('http');
var module_test = require('../module_test');

http.createServer(
    function (request, respond) {
        respond.writeHead(200, {'Content-Type':'text/html'});
        if (request.url === '/'){
            respond.write(module_test);
        }else{ 
            respond.write(request.url);
        }

        respond.end();

    }
)
.listen(8080);