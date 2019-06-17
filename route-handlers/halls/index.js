const express = require('express');
const hallsControler = require('./controller.js');
const router = new express.Router();


router.route('/gethalls').get(hallsControler.getHalls);

router.route('/gethalls/:input').get(hallsControler.getHallById);

router.route('/createhall').post(hallsControler.createHall);

router.route('/updatehall/:input').post(hallsControler.updateHall);

router.route('/deletehall/:input').delete(hallsControler.deleteHall);


module.exports = router;
