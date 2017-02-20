import React from 'react';
import Price from './Price.jsx';
import FreeShippingIndicator from './FreeShippingIndicator.jsx';

const statusTranslator = {
  'new': 'Nuevo',
  'used': 'Usado'
};

class Item extends React.Component{

  render(){
    let item = this.props.value;

    if(!item){ return <div></div>}

    let statusInfo = `${statusTranslator[item.condition]} - ${item.sold_quantity} vendidos`;

    return <div className="item-detail">
      <div className="picture-column">
        <img src={item.picture} />
      </div>
      <div className="details-column">
        <div className="status-info">{statusInfo}</div>
        <div className="title">{item.title}</div>
        <Price value={item.price} showDecimals={true}/>
        <FreeShippingIndicator freeShipping={item.free_shipping}/>
        <br/><a href="#" className="btn btn-primary">Comprar</a>
      </div>
      <div className="description-group">
        <div className="description-title">Descripción del producto</div>
        <div className="description">{item.description}</div>
      </div>
    </div>;
  }
}

module.exports = Item;