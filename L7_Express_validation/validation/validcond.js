const { check } = require("express-validator");

exports.userResgistercondition = [
    check("name")
        .trim()
        .notEmpty() 
        .withMessage('Name is missing')
        .isLength({min : 3})
        .withMessage('Name should consist at least 3 character'),

    check("email")
        .trim()
        .notEmpty()
        .withMessage('Email is missing')
        .isEmail()
        .withMessage('Not a valid email'),

    check("password")
        .trim()
        .notEmpty()
        .withMessage('Email is missing')
        .isLength({min : 6 })
        .withMessage('password must contain at least 6 character')

]

exports.userLogincondition = [
    check("email")
        .trim()
        .notEmpty()
        .withMessage('Email is missing')
        .isEmail()
        .withMessage('Not a valid email'),
    
    check("password")
        .trim()
        .notEmpty()
        .withMessage('Email is missing')
        .isLength({min : 6 })
        .withMessage('password must contain at least 6 character')

]