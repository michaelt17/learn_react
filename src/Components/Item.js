import React, {Component} from 'react'
import data from '../static/data/products.json'

export default class Item extends React.Component{
  render(){
    let products = data.products;
    return(
      <p>{products[0].id}</p>
    )
  }
}
