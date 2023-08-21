// Understanding the basics

// 1. 

// 2. http, https, fs, path, os

// 3. a)http is used to communicate with servers for sending and receiving data ,can also launch the server.
//    b)https launches the SSL server. 
//    c)fs module interacts with files
//    d)path is used for path operationssuch as changing the path or adding a new path
//    e)os module interacts with operating system

// 4. A relative path describes the location of a file relative to the current or working directory whereas absolute path describes the location from the root directory.

// 5. createServer creates a server which takes in an event listener as an argumentt and calls the function whenever the request reaches the server.

// 6. A function without a name is knows as anonymous function.

// 7. server.listen keeps the js code running for incoming request. it takes a port to listen to as an argument.

// Creating a server

const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('My name is Mustafa')
});

server.listen(4000);

