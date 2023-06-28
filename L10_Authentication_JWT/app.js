const express = require('express');
const userRouter = require('./Route/router');
const app = express()
require('./Config/connectDB');

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(userRouter);

app.get('/', (req, res)=>{
    res.status(200).send('Welcome to home page')
})
app.use((req, res, next)=>{
    res.status(404).send(`Not Found`)
})


module.exports = app;