const express = require('express');
const router = express.Router();
const { isvalid } = require('../validation/validcontrol');
const {userRegister, userLogin} = require('../controller/controller');
const { userResgistercondition, userLogincondition } = require('../validation/validcond');

router.post('/userRegister', userResgistercondition, isvalid, userRegister);

router.post('/userLogin', userLogincondition, isvalid, userLogin);

module.exports = router;