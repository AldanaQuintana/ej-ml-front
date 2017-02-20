import React from 'react';
import ItemCard from './ItemCard.jsx';
import LoadingIndicator from './LoadingIndicator.jsx';

class SearchResults extends React.Component{
  render(){
    const loading = this.props.loading;
    let content = this.props.items.map((item) => {
      return <ItemCard item={item} key={item.id}/>;
    });

    if(content.length === 0 && !loading){
      content = <div className='no-results-text'>No hay resultados para la búsqueda</div>
    } else if(loading){
      content = <LoadingIndicator />;
    }

    return <div className="items-results">
      { content }
    </div>;
  }
}

module.exports = SearchResults;