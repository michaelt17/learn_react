import React, {Component} from 'react';
import styled from 'styled-components';

export default class Item extends React.Component{

  render(){
    console.log(this.props)
    return(
      <Holder>
        <CardImage src = {require(`../static/products/${this.props.info.sku}_2.jpg`)}/>
        <p>{this.props.info.title}</p>
        <p>Price: {this.props.info.price}</p>
        <Add onClick={() => this.props.itemAddProduct}> Add to Cart </Add>
      </Holder>
    );
  }
}

const Holder = styled.div`
  width: 150px;
  padding: 10px 0px 100px 20px;
`

const CardImage = styled.img`
  width: 100%;
`
const Add = styled.button`
  background-color: red;
`
