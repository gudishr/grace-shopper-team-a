import React from 'react';
import OrderSummary from './OrderSummary';
import CartItems from './CartItems'

const { Component } = React;

class Cart extends Component {
  render() {
    return (
      <div className='rowC'>
        <div id='cartitems'>< CartItems /></div>
        <div id='ordersummary'>< OrderSummary /></div>
      </div>
    );
  }
}


export default Cart
