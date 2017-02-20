import React from 'react';
import Image from './Image.jsx';
import Price from './Price.jsx';
import FreeShippingIndicator from './FreeShippingIndicator.jsx';

class ItemCard extends React.Component{
  render(){
    const item = this.props.item;

    return <a className="item-card" href={`/items/${item.id}`}>
      <div className="img-column">
        <div className="image-container" style={ { "backgroundImage": `url(${item.picture})` } }></div>
      </div>
      <div className="desc-column">
        <Price value={item.price}/>
        <FreeShippingIndicator freeShipping={item.free_shipping}/>
        <div className='title'>{item.title}</div>
      </div>
    </a>;
  }
}

module.exports = ItemCard;