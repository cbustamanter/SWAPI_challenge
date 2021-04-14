const express = require('express');
const controller = require('../../controllers/planets.controller');
const router = express.Router();
router.route('/:id').get(controller.byId);
router.route('/').get(controller.all);

module.exports = router;