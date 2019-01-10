import React, { Component } from 'react';
import data from './static/data/products.json'
import Item from './Components/Item.js'

class App extends Component {
  render() {
    return (
      <div>
        <p>
          <Item />
          Shelf will go here in the future
        </p>
      </div>
    );
  }
}

export default App;
