const express = require('express');
const hallsControler = require('./controller.js');
const router = new express.Router();


router.route('/')
    .get(hallsControler.getHalls);

router.route('/:input')
    .get(hallsControler.getHall);

router.route('/newhall')
    .post(hallsControler.postHall);

router.route('/updatehall')
    .post(hallsControler.updateHall);    

module.exports = router;