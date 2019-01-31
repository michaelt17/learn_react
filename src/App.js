import React, { Component } from 'react';
import data from './static/data/products.json'
import Shelf from './Components/Shelf.js'

class App extends Component {
  render() {
    return (
      <div>
        <Shelf products={data.products}/>
      </div>
    );
  }
}

export default App;
