import React from 'react';
import SearchBox from './SearchBox.jsx';
import NavBar from './NavBar.jsx';
import Item from './Item.jsx';
import MetaDescription from './MetaDescription.jsx';
import LoadingIndicator from './LoadingIndicator.jsx';

class ItemPageApp extends React.Component{
  constructor(props){
    super(props);
    this.state = { item: null }
  }

  componentDidMount(){

    fetch(`/api/items/${this.props.itemId}`)
      .then((response) => {
        return response.json();
      }).then((json) => {
        document.title = `${json.item.title} - Mercado Libre`;
        this.setState({ item: json.item });
      });
  }

  render(){
    let breadCrumbs = '';
    let loadingIndicator = '';
    let metaDesc = '';

    if(this.state.item === null){
      loadingIndicator = <LoadingIndicator />
    } else {
      const hasDescription = this.state.item.description && this.state.item.description.length > 0;
      const descContent = hasDescription ? this.state.item.description : this.state.item.title;
      metaDesc = <MetaDescription content={descContent}/>;
    }


    return <span>
      <NavBar value={this.props.value} tooltipPosition="bottom" />
      <div className="category-breadcrumbs">{ breadCrumbs }</div>
      <Item value={this.state.item}/>
      { loadingIndicator }
      { metaDesc }
    </span>;
  }
}

module.exports = ItemPageApp;