import React, {Component} from 'react';
import styled from 'styled-components';

export default class Cart extends React.Component{

  render(){
    return(
      <div>
        <p>hi</p>
        {this.props.products.map(product => (
          <p>Name:{this.props.products.title}</p>
            ))}

      </div>
    );
  }
}
