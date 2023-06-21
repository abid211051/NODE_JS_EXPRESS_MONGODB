// Importing http server and file system
const http = require('http');
const fs = require('fs');
const port = 3000;

// Creating server and store it in variable
const server = http.createServer((req, res)=>{
    // finding two http route and rendering html file of that route
    if(req.url === '/'){
        fs.readFile('index.html', (err, data)=>{
            // writeHead is for status code and content type
            res.writeHead(200, {'Content-Type':"text/html"});
            res.write(data);
            res.end()
        })
    }
    else if(req.url === '/about'){
        fs.readFile('about.html', (err, data)=>{
            res.writeHead(200, {'Content-Type':"text/html"});
            res.write(data);
            res.end()
        })
    }
})

// Running server in htttp://localhost:3000/ port
server.listen(port, ()=>{
    console.log("server is running");
})