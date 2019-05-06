const express = require('express');
const hallsControler = require('./controller.js');
const router = new express.Router();


router.route('/')
    .get(hallsControler.getHalls);



module.exports = router;