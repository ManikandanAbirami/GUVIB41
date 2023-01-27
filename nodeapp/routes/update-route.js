var express = require('express');
var updateController = require('../controllers/update-controller');
var router = express.Router();
// to edit data 
router.get('/edit/:id', updateController.editData);
// to update data 
router.post('/update/:id', updateController.updateData);
module.exports = router;