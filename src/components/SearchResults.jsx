import React from 'react';
import ItemCard from './ItemCard.jsx';

class SearchResults extends React.Component{
  render(){
    const loading = this.props.loading;
    let content = this.props.items.map((item) => {
      return <ItemCard item={item} key={item.id}/>;
    });

    if(content.length === 0 && !loading){
      content = <div className='no-results-text'>No hay resultados para la búsqueda</div>
    } else if(loading){
      content = <div className='loading-indicator'></div>;
    }

    return <div>
      { content }
    </div>;
  }
}

module.exports = SearchResults;