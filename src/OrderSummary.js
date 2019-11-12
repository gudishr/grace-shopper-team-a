import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts, setLineItemThunks, destroyLineItemThunks, updateThunks } from './redux/store';

const { Component } = React;

class _OrderSummary extends Component {
  constructor() {
    super();
    this.state = {
    }
    this.destroy = this.destroy.bind(this);
    this.update = this.update.bind(this);
  }
  async destroy(id) {
    await this.props.destroy(id);
  }
  async update(id, method) {
    await this.props.update(id, method);
  }
  async componentDidMount() {
    await this.props.getProducts();
    await this.props.setLineItem();
  }
  render() {
    const { products, lineitem } = this.props
    const subTotal = lineitem.reduce((acc, cv) => {
      acc += cv.product.price*cv.quantity
      return acc
    }, 0)
    const tax = Math.ceil((subTotal * 0.0725)*100)/100
    const total = subTotal + tax
    return (
      <div>
        <h3>Order Summary</h3>
        <ul>
            <div id='oflex'>
                <div id='ordersum'>

                    <li><span>Sub Total: </span>${subTotal}</li>
                    <li><span>Tax: </span>${tax}</li>
                    <li><span>TOTAL: </span>${total}</li>

                    <Link to={`/checkout`}><button>Checkout</button></Link>
                </div>
              </div>
        </ul>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    products: state.products,
    lineitem: state.lineitem
  }
}

const mapDispatchToProps = {
  getProducts: getProducts,
  setLineItem: setLineItemThunks,
  destroy: destroyLineItemThunks,
  update: updateThunks
}

const OrderSummary = connect(mapStateToProps, mapDispatchToProps)(_OrderSummary);

export default OrderSummary
