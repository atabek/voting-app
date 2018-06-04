import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';

class App extends Component {
  render() {
    return (
      <div id="main" className="main ui text container">
        <h1 className="ui dividing centered header">Popular Products</h1>
        <ProductList />
      </div>
    );
  }
}

export default App;
