const express = require('express');
const hallsControler = require('./controller.js');
const router = new express.Router();


router.route('/getall')
    .get(hallsControler.getHalls);

router.route('/get/:input')
    .get(hallsControler.getHall);

router.route('/postuser')
    .post(hallsControler.postHall);

router.route('/updateuser/:input')
    .post(hallsControler.updateHall);    

router.route('/deleteuser/:input')
    .delete(hallsControler.deleteHall);    

module.exports = router;