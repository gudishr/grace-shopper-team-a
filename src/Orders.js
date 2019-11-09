import React from 'react';
import { connect } from 'react-redux';
import { getOrders } from './redux/store'

const { Component } = React;

class _Orders extends Component {
  async componentDidMount() {
    await this.props.getOrders()
  }
  render() {
    const {orders} = this.props;
    return (
      <div>
        <h4>Manage Orders</h4>
        <ul>
          {

            orders.map(order =>
              <li key={order.id}>
                <img src={order.imageURL}></img>
                {order.name}
                Order #: {order.id}<br />
                Order Total: ${order.total}<br />
                User: {order.userId}
                <br /> <br />
              </li>
            )
          }
        </ul>
      </div>
    )
  }
};

const mapStateToProps = ({ orders }) => ({ orders });

const mapDispatchToProps = (dispatch) => {
return {
  getOrders: () => dispatch(getOrders())
 };
};

const Orders = connect (mapStateToProps, mapDispatchToProps)(_Orders);

export default Orders;
