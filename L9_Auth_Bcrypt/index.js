require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./Model/registeruse');

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const db = process.env.DBURL;
const PORT = process.env.PORT;
mongoose.connect(db)
.then(()=>{
    console.log(`DB connected successfuly`);
})
.catch((error)=>{
    console.log(error.message);
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/View/index.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/View/register.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/View/login.html'));
});

app.post('/register-done', async(req, res)=>{
    try {
        const hash = await bcrypt.hash(req.body.password, 11);
        if(hash){
            const newuser = new User({
                name : req.body.name,
                email : req.body.email,
                password : hash
            })
            const result = await newuser.save();
            if(result){
                res.send(result);
            }
            else{
                res.send(`Can no create new user`);
            }
        }
    } catch (error) {
        res.send(error.message);
    }
})
app.post('/login-done', async(req, res)=>{
    try {
        const user = await User.findOne({email : req.body.email})
        if(user){
            const result = await bcrypt.compare(req.body.password, user.password)
            if(result){
                res.send(user);
            }
            else{
                res.send(`Provided Information did not matched`);
            }
        }
    } catch (error) {
        res.send(error.message);
    }
})

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
})