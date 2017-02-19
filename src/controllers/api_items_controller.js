const request = require('request'),
  ML_API_BASE = 'https://api.mercadolibre.com',
  _ = require('lodash');

const PRICE_DECIMALS = 2,
 AUTHOR_NAME = "Aldana Laura",
 AUTHOR_LAST_NAME = "Quintana Munilla";

const _parseItem = (itemData) => {
  let parsedItem = {};

  parsedItem.id = itemData.id;
  parsedItem.title = itemData.title;
  parsedItem.price = {
    "currency": itemData.currency_id,
    "amount": itemData.price,
    "decimals": PRICE_DECIMALS
  };
  parsedItem.picture = itemData.thumbnail;
  parsedItem.condition = itemData.condition;
  parsedItem.free_shipping = itemData.shipping.free_shipping;

  return parsedItem;
};

class ResponseDataBuilder {
  constructor(){
    this.author = { "name": AUTHOR_NAME, "lastname": AUTHOR_LAST_NAME };
  };

  _keys(){
    return Object.keys(this);
  }

  setCategories(categories){
    this.categories = categories;
    return this;
  };

  setItems(items){
    this.items = items;
    return this;
  };

  setItem(item){
    this.item = item;
    return this;
  };

  setItemSoldQuantity(sold_quantity){
    this.item.sold_quantity = sold_quantity;
    return this;
  };

  setItemDescription(description){
    this.item.description = description;
    return this;
  };

  build(){
    let parsed = {};
    const keys = this._keys();

    for (var i = keys.length - 1; i >= 0; i--) {
      const key = keys[i];
      parsed[key] = this[key];
    }

    return parsed;
  };
};

const _withinInnerFilter = (data, callback) => {
  const innerFilters = _.map(data.filters, (f) => {
    return _.map(f.values, (val) => {
      return val.path_from_root ? val.path_from_root : val;
    });
  });

  return callback(_.flattenDeep(innerFilters));
}

const _mapFilters = (filters) => {
  return _.map(filters, (f) => {
    return f.name;
  });
}

const _getCategories = (data) => {
  return _withinInnerFilter(data, function(values){
    return _mapFilters(values);
  });
};

//--- Data Responses ----

const _parseItems = (data) => {
  return new ResponseDataBuilder().setCategories(_getCategories(data))
    .setItems(_.map(data.results, _parseItem))
    .build();
};

const _parseSingleItemWithDesc = (itemData, descData) => {
  return new ResponseDataBuilder().setItem(_parseItem(itemData))
    .setItemSoldQuantity(itemData.sold_quantity)
    .setItemDescription(descData.text)
    .build();
}

//--- Controller -------

class ApiItemsController {
  static index(req, res){
    let query = req.query.q;
    if ( !query ){ res.sendStatus(422); return; };

    const limitQuery = req.query.limit ? `&limit=${req.query.limit}` : '';

    request.get(`${ML_API_BASE}/sites/MLA/search?q=${query}${limitQuery}`, function(error, response, body){
      const responseBody = JSON.parse(body);

      res.status(200).send(_parseItems(responseBody));
    });
  };

  static show(req, res){
    request.get(`${ML_API_BASE}/items/${req.params.id}`, function(error, response, body){
      const itemResponseBody = JSON.parse(body);

      request.get(`${ML_API_BASE}/items/${req.params.id}/description`, function(error, response, body){
        const itemDescBody = JSON.parse(body);

        res.status(200).send(_parseSingleItemWithDesc(itemResponseBody, itemDescBody));
      });
    })
  };
}


module.exports = ApiItemsController;