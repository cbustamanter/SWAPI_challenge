const express = require('express');
const planetsRoutes = require('./planets.route')
const peopleRoutes = require('./people.route')
const starshipsRoutes = require('./starships.route')
const router = express.Router();

/**
 * GET v1/status
 */
 router.get('/status', (req, res) => {
	res.json({
		message: 'OK',
		timestamp: new Date().toISOString(),
		IP: req.ip,
		URL: req.originalUrl,
	});
});

router.use('/planets', planetsRoutes);
router.use('/people', peopleRoutes);
router.use('/starships', starshipsRoutes);

module.exports = router;