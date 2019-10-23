const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add',(req, res) => {
    res.render('./view/pages/login.js');  
});

router.post('/adds')

module.exports = router;