// Request / Response

//1. Node js uses event driven approach in which itt first starts the script then register the variables and functions in the js code and goes through it and then event loop runs and listens  for an event happening and runs until event listeners are registered.

//2. because it uses event driven approach which keeps on running unti events are registered, this event loop helps js even though it is a single threaded language

//3. process.exit quits the process after the task is done

//4. req.url contains the url requested from the user.
//   req.header contains the header of the url requested.
//   req.method contains the method such as get,post,delete,etc.

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/home') {
        res.setHeader('Content-Type','text/html');
        res.write('<html><body><h1>Welcome Home</h1></body></html>');
        res.end();
    }
    else if(req.url == '/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><body><h1>Welcome to About Us page</h1></body></html>');
        res.end();
    }
    else if(req.url == '/node'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><body><h1>Welcome to my Node Js project</h1></body></html>');
        res.end();
    }
})

server.listen(3000)