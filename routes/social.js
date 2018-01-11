var express = require('express');
var router = express.Router();
const socialController = require('./../controllers/socialcontroller');

/* GET users listing. */
router.get('/social', socialController.isloggedin);
router.get('/', socialController.login);

module.exports = router;
