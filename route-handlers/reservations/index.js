const express = require('express');
const reservationsControler = require('./controller.js');
const router = new express.Router();


router.route('/getall')
    .get(reservationsControler.getReservations);

router.route('/get/:input')
    .get(reservationsControler.getReservation);

router.route('/postreservation')
    .post(reservationsControler.postReservation);

router.route('/updatereservation/:input')
    .post(reservationsControler.updateReservation);    

router.route('/deletereservation/:input')
    .delete(reservationsControler.deleteReservation);    

module.exports = router;