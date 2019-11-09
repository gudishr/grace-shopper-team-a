import React from 'react';
import OrderSummary from './OrderSummary';
import CartItems from './CartItems'
import { StripeProvider } from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';
const { Component } = React;

class Cart extends Component {
  render() {
    return (
      <div>
      <div className='rowC'>
        <div id='cartitems'>< CartItems /></div>
        <div id='ordersummary'>< OrderSummary /></div>
      </div>
        <StripeProvider apiKey ="pk_test_GQHHpXRRAorsIxR9ykssVpzJ00D9ki3Q5N">
          < MyStoreCheckout />
        </StripeProvider>
      </div>
    );
  }
}


export default Cart
