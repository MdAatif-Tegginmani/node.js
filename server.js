// var http =require('http');
// function onRequest(request,response){
    //     response.writeHead(200,{'content-type':'text/plain'})
//     response.write('Hello Aatif');
//     response.end();

// }

// http.createServer(onRequest).listen(8000);

const http=require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers)
    
    const url =req.url ;

    res.setHeader("Content-type","text/html")
    res.write('<html>')
    res.write('<head><title>My node </title></head>')

    if (url==='/home') {
        res.write('<body><h2>Welcome Home</h2></body>')
    }
    else if(url==="/about"){

        res.write("<body><h2>Welcome to About us page </h2></body>")

    }
    else if(url==="/node"){

        res.write("<body><h2>Welcome to Node.js project </h2></body>")

    }
    res.write('</html>')
    res.end()
})
    server.listen(3000)

    // res.write('<body><h1>AATIF</h1></body>')
    // res.write('</html>')
    // res.end();
    
    
    // let url= req.url ;
    
    //     if(url==='/'){
//         res.write('<html>')
//         res.write('<body><form action="/message" method="POST"><input type="text name="message" ><button type="submit">Send</button></form></body>')
       
//         res.write('</html>')
//      return  res.end();


//     } 

//     res.setHeader('Content-type','text/html')
//     res.write('<html><body><h2>DORA te amo </h2></body></html>')

    


// })

// server.listen(3000) ;

