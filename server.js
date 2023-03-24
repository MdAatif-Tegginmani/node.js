var http =require('http');
function onRequest(request,response){
    response.writeHead(200,{'content-type':'text/plain'})
    response.write('Hello Aatif');
    response.end();

}

http.createServer(onRequest).listen(8000);