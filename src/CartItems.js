import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts, setLineItemThunks, destroyLineItemThunks, updateThunks } from './redux/store';

const { Component } = React;

class _CartItems extends Component {
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

    const { products, destroy, update } = this.props
    const { lineitem } = this.props || [];
    return (
      <div>
      { lineitem.length > 0 && (
        <div>
        <h3>Cart Items: { lineitem.length }</h3>
        <ul>
          {
            (lineitem.map( item =>
               <div key={item.id} id='flex'>
                <div id='flex-img'>
                  <Link to={`/products/${item.id}`} activeclassname="active"><li key='img'><img src ={item.product.imageURL}></img></li></Link>
                </div>

                <div id='cart-flex'>

                <div id='flex-item-title'>
                  <Link to={`/products/${item.id}`} activeclassname="active"><h1 key='name'>{item.product.name}</h1></Link>
                  <li id='genre'>{item.product.genre}</li>
                  <button onClick = { () => destroy(item.id) }>Remove</button>
                </div>
                <div id='flex-details'>
                  <p key='itemPriceName'>Price</p>
                  <li key='itemPrice'>${item.product.price}</li>
                </div>
                <div id='flex-details'>
                  <p key='quantityName'>Quantity</p>
                  <div id='flexq'>

                    <button id='quantity' onClick = { () => update(item.id, 'subtract') } >-</button>
                    <li key='quantity'>{item.quantity}</li>
                    <button id='quantity' onClick = { () => update(item.id, 'add') } >+</button>

                  </div>
                </div>

                <div id='flex-details'>
                  <p key='totalPriceName'>Total</p>

                  <li key='totalPrice'>${item.product.price*item.quantity}</li>
                </div>
                </div>

               </div>
            ))
          }
        </ul>
        </div>
        )}

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

const CartItems = connect(mapStateToProps, mapDispatchToProps)(_CartItems);

export default CartItems
