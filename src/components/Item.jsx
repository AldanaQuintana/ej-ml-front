import React from 'react';
import Price from './Price.jsx';

const statusTranslator = {
  'new': 'Nuevo',
  'used': 'Usado'
};

class Item extends React.Component{

  render(){
    let item = this.props.value;

    if(!item){ return <div></div>}

    let statusInfo = `${statusTranslator[item.condition]} - ${item.sold_quantity} vendidos`;

    return <div>
      <img src={item.picture} />
      <div className="status-info">{statusInfo}</div>
      <div className="title">{item.title}</div>
      <Price value={item.price} />
      <a href="#">Comprar</a>
      <div className="description-title">Descripción del producto</div>
      <div className="description">{item.description}</div>
    </div>;
  }
}

module.exports = Item;