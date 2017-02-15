const express = require('express'),
  homeRouter = require('./api/home_router'),
  itemsRouter = require('./api/items_router')

class Router {
  static configure(app){
    app.use('/', homeRouter);

    app.use('/api/items', itemsRouter);
  }
}

module.exports = Router;
