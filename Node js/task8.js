// Writing and reading from a file

const http = require('http');
const fs = require('fs');
const { log } = require('console');
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method
    if (url === '/'){
        res.setHeader('Content-Type','text/html');
        fs.readFile('message.txt','utf8',(err,data)=>{
            res.write('<html>');
            res.write(`'<head><title>Enter Message</title>${data}<head>'`);
            res.write('<body><h1></h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        })

  
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                console.log(message);  
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });                      
        });                
    };
//    res.setHeader('Content-Type','text/html');
//    res.write('<html><body><h1>Hello from my node js server</h1></body></html>');
//    res.end();
});
server.listen(3000);




// buffer allows to use multiple chunks and work with them before they are released.
// stream allows for the data to be sent in chunks so that they can be worked without parsing the entire file.