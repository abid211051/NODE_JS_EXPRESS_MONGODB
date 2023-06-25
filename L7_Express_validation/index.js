const express = require('express');
const userRouter = require('./route/route')
const app = express();
PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/', (req, res)=>{
    res.send('<h1>Home route</h1>');
})
app.use(userRouter);
app.listen(PORT, ()=>{
    console.log('server is running');
 })