const express = require('express'),
  router = express.Router(),
  itemsController = require('../../controllers/items_controller');

/* GET /api/items */
router.get('/', itemsController.index);

/* GET /api/items/:id */
router.get('/:id', itemsController.show);

module.exports = router;