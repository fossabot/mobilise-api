var express = require('express');
var router = express.Router();
var controller = require('../controllers').UserController;

router.get('/:id', function(req, res) {
  controller.getById(req, res);
})

module.exports = router;