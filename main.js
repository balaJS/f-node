var http = require ("http");

http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/plain'});
    response.end("Hello god!");
}).listen(80);

console.log(http);