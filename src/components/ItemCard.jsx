import React from 'react';
import Image from './Image.jsx';
import Price from './Price.jsx';

class ItemCard extends React.Component{
  render(){
    const item = this.props.item;

    const freeShippingIndicator = item.free_shipping ? <div className="icon-truck"></div> : '';

    return <a className="item-card" href={`/items/${item.id}`}>
      <div className="img-column">
        <img src={item.picture} />
      </div>
      <div className="desc-column">
        <Price value={item.price}/>
        { freeShippingIndicator }
        <div className='title'>{item.title}</div>
      </div>
    </a>;
  }
}

module.exports = ItemCard;