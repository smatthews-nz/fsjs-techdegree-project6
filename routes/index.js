const express = require('express');
const router = express.Router();

//get data from data.json
const data = require('../data.json');
//get projects from data
const {projects} = data;

router.get('/', (req, res) =>{
    res.render('index', {projects});
});

module.exports = router;