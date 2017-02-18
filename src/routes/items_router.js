const express = require('express'),
  router = express.Router(),
  itemsController = require('../controllers/items_controller');

/* GET /items */
router.get('/', itemsController.index);

module.exports = router;