const express = require('express');
const usersControler = require('./controller.js');
const router = new express.Router();


router.route('/getall')
    .get(usersControler.getUsers);

router.route('/get/:input')
    .get(usersControler.getUser);

router.route('/postuser')
    .post(usersControler.postUser);

router.route('/updateuser/:input')
    .post(usersControler.updateUser);    

router.route('/deleteuser/:input')
    .delete(usersControler.deleteUser);    

module.exports = router;