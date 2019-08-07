const express = require('express');
const router = express.Router();

//TODO Require the controllers
//const product_controller = require('../controllers/product.controller;')

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// root
router.get('/', function (req, res) {
    res.render('index.html');
});

module.exports = router;