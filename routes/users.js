var express = require('express');
var router = express.Router();
const userController = require('./../controllers/usercontroller');

/* GET users listing. */
router.get('/:user', userController.getdetails);

module.exports = router;
