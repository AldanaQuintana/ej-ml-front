const request = require('request');

class ItemsController {
  static index(req, res){
    res.render('items/index');
  };

  static show(req, res){
    res.render('items/show');
  };
}


module.exports = ItemsController;