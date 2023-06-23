// Importing 'dotenv' for access .env
require('dotenv').config();
const express = require('express');
const app = express();

// express.json() and express.urlencoded() middleware functions are being used to parse 
// incoming requests with JSON and URL-encoded payloads. 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// The express.static() middleware function is being used to serve static files from the public directory.
app.use(express.static("public"));

// process.end.PORT is taking port number from .env file.
const PORT = process.env.PORT || 3005;

// app.method || route.method this are  also middleware.
// showing index.html file in '/' route with image
// and css styling. Because we serverd static file with
// express.static() method.
app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
})
// showing circle.html file in '/circle' route.
app.get('/circle', (req, res)=>{
    res.sendFile(__dirname + "/circle.html");
})
// calculating and showing result in '/circle-area' route.
// HERE we are getting radius from form data we used in circle.html file.
app.post('/circle-area', (req, res)=>{
    const radius = req.body.radius;
    res.send(`<h1> The area of circle is ${3.1416 * radius * radius}`);
})

// getting http request with query parameter.
// query will be in " localhost:3000/?id=123&name=abid " this formate.
// note: there will be no single or double cot when setting value in query.
// query always   parameter=value    in this formate, no cot at all.
app.get('/query', (req, res)=>{
    const id = req.query.id;
    const name = req.query.name;
    res.send(`The id is ${id} and the name is ${name}`);
})

// getting http request with params.
// params will be " localhost:3000/params/age/19/name/abid " in this formate.
// value in req.params.age and req.params.name will come from
// :age  and  :name  parameter, when client provide data.
// we use regex after :age and :name to restrict the type of data. 
// Ex: :age([0-9]+) will take age value only in digit, with any number of combination from 0-9.
app.get('/params/age/:age([0-9]+)/name/:name([a-zA-Z]+)', (req, res)=>{
    const age = req.params.age;
    const name = req.params.name;

    res.send(`The age is ${age} and the name is ${name}`)
})
app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
})