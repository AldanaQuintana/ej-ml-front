const express = require('express'),
  homeRouter = require('./home_router'),
  apiItemsRouter = require('./api/items_router'),
  itemsRouter = require('./items_router');

class Router {
  static configure(app){
    app.use('/', homeRouter);


    app.get('/robots.txt', function(req, res){
      res.type('text/plain')
      res.send("User-agent: *\nAllow: /");
    });

    app.use('/items', itemsRouter);

    app.use('/api/items', apiItemsRouter);
  }
}

module.exports = Router;
