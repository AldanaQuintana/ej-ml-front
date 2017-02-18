const request = require('request');

class ItemsController {
  static index(req, res){
    res.render('items/index');
  };
}


module.exports = ItemsController;