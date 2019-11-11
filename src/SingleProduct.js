import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getProducts, createLineItemThunks } from './redux/store.js';
const { Component } = React;

class _SingleProduct extends Component {
constructor(props) {
  super(props);
  this.state = {
    product: {},
    quantity: null
   };
  this.create = this.create.bind(this);
}

create(ev) {
  const { product } = this.state;
  ev.preventDefault();
  const payload = { itemPrice: product.price, quantity: this.state.quantity, productId: product.id}
  this.props.createLineItem(payload);
}

async componentDidMount() {
  const {data} = await axios.get(`/api/products/${this.props.match.params.id}`)
  this.setState({product: data})
}
render() {
  const { product } = this.state;
  return (
    <div id='flex-prod-parent'>
      <div id='flex-prod-child'>
        {
          <ul>
            <li key='img'><img src ={product.imageURL} /></li>
            <li key='name'>{product.name}</li>
            <li id='genre'>{product.genre}</li>
            <li id='price'>${product.price}</li>
            <select onChange={ (ev) => this.setState({ quantity : ev.target.value}) }>
            <option>Select Qty</option>
            {[1,2,3,4,5].map(num => <option key={num} value={num}>{num}</option>)}
            </select>
            <button type = 'submit' onClick={this.create}>ADD TO CART</button>
            <p>{product.description}</p>
          </ul>
        }
        </div>
    </div>
   )
 };
};

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = {
  getProducts: getProducts,
  createLineItem: createLineItemThunks
}

const SingleProduct = connect(mapStateToProps, mapDispatchToProps)(_SingleProduct);

export default SingleProduct
