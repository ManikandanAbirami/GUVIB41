var express = require('express')
var readController = require('../controllers/read-controller');
var router = express.Router();

router.get('/read', readController.readData);
module.exports = router;