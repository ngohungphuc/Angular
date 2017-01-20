/**
 * Created by phuc.ngo on 20/01/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/todos', function (req, res, next) {
    res.send('api');
});

module.exports = router;