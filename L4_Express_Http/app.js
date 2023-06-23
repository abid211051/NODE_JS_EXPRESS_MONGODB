const express = require('express');
const app = express();
const userRoute = require('./routes/user.route');

// app.use is for call route from "userRoute", 
// and here we add some extre tag "/user" to specifiy the router is for users works.
app.use("/user", userRoute);


// Testing different res method
// res.status(), res.send(), res.sendFile(), res.cookie()
// res.clearCookie(), res.redirect()
app.get('/status', (req,res)=>{
    res.status(200);
    // res.send(" testing all res. method");
    res.sendFile(__dirname+"/index.html");
    res.cookie('username', 'johndoe');
    res.clearCookie('username');
    // res.redirect('/user/redirect');
    // res.end()
})

app.use((req, res)=>{
    res.send('<h1>404 Not Found</h1>')
})
module.exports = app;