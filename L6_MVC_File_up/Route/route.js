const express = require('express');
const router = express.Router();
const {userdata, createuser, updateuser, deleteuser} = require('../Controller/usercontroller');
const multer = require('multer');

const upload = multer({dest : 'uploads/'});

router.get('/', userdata);

router.post('/user', upload.single('image'),createuser);

router.put('/user/:id', upload.single('image'), updateuser);

router.delete('/user/:id', upload.single('image'), deleteuser);
module.exports = router;
