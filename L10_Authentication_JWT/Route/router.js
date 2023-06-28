require('dotenv').config()
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../Model/schema');
const jwt = require('jsonwebtoken');
const auth = require('../Middleware/verifyJWT');

router.post('/register', async(req, res)=>{
    try {
        const existuser = await User.findOne({email : req.body.email});
        if(existuser){
            return res.send({
                success : false,
                message : 'user already exist'
            })
        }
        const hash = await bcrypt.hash(req.body.password, 10);
        const newuser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hash
        })
        const user = await newuser.save();
        if(user){
            res.send({
                success : true,
                user : {
                    id : user._id,
                    username : user.username,
                    email : user.email
                }
            })
        }
        else{
            res.send({
                success : false,
                message : 'Could not save new User'
            })
        }
    } catch (error) {
        res.send({
            success : false,
            message : error.message
        })
    }
})

router.post('/login', async(req, res)=>{
    try {
        const user = await User.findOne({email : req.body.email});
        if(!user){
            return res.send({
                success : false,
                message : 'User not Found, try again'
            })
        }
        const result = await bcrypt.compare(req.body.password, user.password);
        if(result){
            const payload = {
                id : user._id,
                username : user.username,
                email : user.email
            }
            const token = jwt.sign(payload, process.env.JWTKEY, {
                expiresIn: "2d",
              });
            res.send({
                success : true,
                user : payload,
                token : "Bearer " + token
            })
        }
        else{
            res.send({
                success : false,
                message : "Please provide a valid password"
            })
        }
    } catch (error) {
        res.send({
            success : false,
            message : error.message
        })
    }
})

router.get('/profile',auth, (req, res)=>{
    res.status(200).send("Welcome 🙌 ");
});

module.exports = router;