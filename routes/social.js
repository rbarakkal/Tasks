var express = require('express');
var router = express.Router();
const socialController = require('./../controllers/socialcontroller');

/* GET users listing. */
router.get('/social', socialController.isloggedin);

module.exports = router;
