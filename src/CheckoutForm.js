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
        <button>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = ({ lineitem }) => ({ lineitem })

const mapDispatchToProps= (dispatch) => {
  return {
    setLineItemThunks: () => dispatch(setLineItemThunks()),
    createOrder: (order) => dispatch(createOrder(order))
  }
}

const CheckoutForm = connect(mapStateToProps, mapDispatchToProps)(_CheckoutForm)

const InjectedCheckoutForm = injectStripe(CheckoutForm);

export default InjectedCheckoutForm;
