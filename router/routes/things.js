var express = require('express');
var passport = require('passport');
var router = express.Router();

var libraryService = require('../../services/libraryService');
var Q = require('q');

router.get('/', function(req, res) {

		Q.nfcall(libraryService.things).then(function(things) {
		res.send(things);

  	});
});

module.exports = router;