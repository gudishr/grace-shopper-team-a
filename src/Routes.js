import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import MyStoreCheckout from './MyStoreCheckout';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component = { Home } />
        <Route exact path='/products' component = { Products } />
        <Route path='/products/:id' component = { SingleProduct } />
        <Route path='/cart' component = { Cart } />
        <Route path='/checkout' component = { MyStoreCheckout } />
      </Switch>
    );
  }
}

export default Routes;
