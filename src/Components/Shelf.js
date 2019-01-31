import React, { Component } from 'react';
import styled from 'styled-components';
import Item from './Item.js'

class Shelf extends Component {

  render() {
    return (
      <ShelfHolder>
        {this.props.products.map(product => (
              <Item info = {product}
                    itemAddProduct = {this.props.addProduct}
              />
            ))}
      </ShelfHolder>
    );
  }
}

const ShelfHolder = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  width: 80%;
  float: left;
`

export default Shelf;
