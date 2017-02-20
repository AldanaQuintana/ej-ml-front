import React from 'react';
import Image from './Image.jsx';
import Price from './Price.jsx';
import FreeShippingIndicator from './FreeShippingIndicator.jsx';
import LoadingIndicator from './LoadingIndicator.jsx';

class ItemCard extends React.Component{
  constructor(props){
    super(props);
    this.state = { image: '' }
  }

  componentDidMount(){
    fetch(`/api/items/${this.props.item.id}`)
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({ image: json.item.picture });
      });
  }

  render(){
    const item = this.props.item;
    let imageItem = <div className="image-placeholder"><LoadingIndicator /></div>;

    if(this.state.image){
      imageItem = <div className="image-container" style={ { "backgroundImage": `url(${this.state.image})` } }></div>;
    }

    return <a className="item-card" href={`/items/${item.id}`}>
      <div className="img-column">
        { imageItem }
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