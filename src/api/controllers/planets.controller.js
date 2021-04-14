const axios = require('axios').default;
const functions = require('../utils/planets.functions');
const constants = require('../../constants');

exports.byId = (req, res, next) => {
	try {
        const id = req.params.id;
        axios
        .get(`${constants.SWAPI_URL}/planets/${id}/`)
        .then(resp => {      
           res.status(200).json(functions.transformKey(resp.data))
        })
	} catch (e) {
		next(e);
	}
};

exports.all = (req, res, next) => {
	try {
        axios
        .get(`${constants.SWAPI_URL}/planets/`)
        .then(resp => {      
           res.status(200).json(functions.transformKeyFromList(resp.data))
        })
	} catch (e) {
		next(e);
	}
};
