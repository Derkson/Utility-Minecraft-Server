var express = require('express');
var router = express.Router();

router.get('/status', function(req, res, next) {
    res.send({umsStatus:'status'});
});

router.get('/toggle', function(req, res, next) {
    res.send({umsStatus:'toggle'});
});

module.exports = router;