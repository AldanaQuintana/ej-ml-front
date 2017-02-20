const express = require('express'),
  router = express.Router(),
  itemsController = require('../controllers/items_controller');

/* GET /items */
router.get('/', itemsController.index);

/* GET /items/:id */
router.get('/:id', itemsController.show);

module.exports = router;