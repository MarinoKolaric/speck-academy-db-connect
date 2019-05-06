const express = require ('express');
const hallsController = require ('./controller')
const router = new express.Router();

router.route('/').get(hallsController.getHalls);

router.route('/:hallId').get(hallsController.getHallById);



module.export = router;