import React from 'react';
import ItemCard from './ItemCard.jsx';

class SearchResults extends React.Component{
  render(){
    let content = this.props.items.map((item) => {
      return <ItemCard item={item} />;
    });

    if(content.length === 0){
      content = <div className='no-results-text'>No hay resultados para la búsqueda</div>
    }

    return <div>
      { content }
    </div>;
  }
}

module.exports = SearchResults;