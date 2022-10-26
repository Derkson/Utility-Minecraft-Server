var express = require('express');
var router = express.Router();

router.get('/status', function(req, res, next) {
    res.status(200).send({umsStatus:'status'});
});

router.get('/toggle', function(req, res, next) {
    res.status(200).send({umsStatus:'toggle'});
});

module.exports = router;