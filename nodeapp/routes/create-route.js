var express = require('express');
var createController = require('../controllers/create-controller');
var router = express.Router();

router.get('/form', createController.crud);

router.post('/create', createController.createData);

module.exports = router;
