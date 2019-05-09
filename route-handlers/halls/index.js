const express = require('express');
const hallsControler = require('./controller.js');
const router = new express.Router();


router.route('/getall')
    .get(hallsControler.getHalls);

router.route('/get/:input')
    .get(hallsControler.getHall);

router.route('/posthall')
    .post(hallsControler.postHall);

router.route('/updatehall/:input')
    .post(hallsControler.updateHall);    

router.route('/deletehall/:input')
    .delete(hallsControler.deleteHall);    

module.exports = router;