import React from 'react';
import Nav from './Nav';
import Routes from './Routes';
import { connect } from 'react-redux';
import { SignIn } from './SignIn';
import { getUsers, getProducts } from '../store';
import { StripeProvider } from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';

class App extends React.Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getProducts();
  }
  render() {
    return (
      <div>
        < SignIn />
        < Nav />
        < Routes />

        <StripeProvider apiKey ="pk_test_GQHHpXRRAorsIxR9ykssVpzJ00D9ki3Q5N">
          < MyStoreCheckout />
        </StripeProvider>

      </div>
    );
  };
};

const mapDispatchToAppProps = {
  getUsers: getUsers,
  getProducts: getProducts
}

export default connect(null, mapDispatchToAppProps)(App);
