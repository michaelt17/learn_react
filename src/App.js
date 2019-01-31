import React, { Component } from 'react';
import styled from 'styled-components';
import data from './static/data/products.json'
import Shelf from './Components/Shelf.js'
import Cart from './Components/Cart.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cart: []
    }

    this.addProduct = this.addProduct.bind(this);
  }

  /*
  addProduct = (product) => {
    let appCart = this.state.cart;
    appCart.push(product);
    this.setState({cart: appCart})
    console.log(this.state.cart)
  }
  */
  addProduct = () => {
    console.log('hello');
  }

  render() {
    return (
      <div>
        <div>
        <Shelf products={data.products}
               addProduct = {this.addProduct}
        />
        </div>

        <CartHolder>
          <Cart products = {this.state.cart}/>
        </CartHolder>
      </div>
    );
  }
}

export default App;

const CartHolder = styled.div`
  float: right;
`
