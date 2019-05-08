const express = require ('express');
const hallsController = require ('./controller')
const router = new express.Router();

router.route('/').get(hallsController.getHalls);

router.route('/').post(hallsController.createHall);

router.route('/:hall_id').put(hallsController.updateHall);

router.route('/:hall_id').get(hallsController.getHallById);





module.exports = router;
