const express = require('express');
const controller = require('../../controllers/starships.controller');
const router = express.Router();
router.route('/add').post(controller.add);
router.route('/').get(controller.all);
router.route('/:id').get(controller.ById);

module.exports = router;