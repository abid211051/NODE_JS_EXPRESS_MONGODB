const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('It is a get request');
})
router.get('/redirect', (req, res)=>{
    res.send('Testing redirecting is working or not');
})
router.post('/post', (req, res)=>{
    res.send('It is a post method');
})
router.put('/put', (req, res)=>{
    res.send('It is a put method');
})
router.delete('/delete', (req, res)=>{
    res.send('It is a delete method');
})

module.exports = router;