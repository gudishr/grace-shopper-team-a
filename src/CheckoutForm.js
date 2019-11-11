import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import CardSection from './CardSection';
import {connect} from 'react-redux';
import {createOrder} from './redux/store';

const { Component } = React;

class _CheckoutForm extends Component {
  constructor() {
    super();
  }
  postOrder = (ev) => {
    const lineitems = this.props.cart.map(e => {

      return {
        price: e.product.price,
        quantity: e.quantity,
        imageURL: e.product.imageURL,
        name: e.product.name
      }

    })
    console.log(lineitems)

    this.props.createOrder({lineitems: {...lineitems}})
    // Promise.all(orders.map(f => this.props.createOrder(f)))
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.stripe
      .createPaymentMethod('card', {
        billing_details: {
          name: 'Alexandra'
        }})
        .then(({paymentMethod}) => {
          console.log('Received Stripe PaymentMethod:', paymentMethod);
        }
      );
  }

  render() {
    return (
      <form id='checkoutform' onSubmit={ this.handleSubmit }>
        <CardSection />
        <button onClick = {this.postOrder}>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps= (dispatch) => {
  return {
    setCartThunks: () => dispatch(setCartThunks()),
    createOrder: (order) => dispatch(createOrder(order))
  }
}

const CheckoutForm = connect(mapStateToProps, mapDispatchToProps)(_CheckoutForm)

const InjectedCheckoutForm = injectStripe(CheckoutForm);

export default InjectedCheckoutForm;
