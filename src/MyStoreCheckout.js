import React from 'react';
import { Elements } from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';

const { Component } = React;

class MyStoreCheckout extends Component {
  render() {
    return (
      <Elements>
        <InjectedCheckoutForm />
      </Elements>
    );
  }
}

export default MyStoreCheckout;


