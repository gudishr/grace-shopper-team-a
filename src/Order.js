class _Orders extends Component {
  render() {
    const {orders} = this.props;
    return (
      <div>
        <h4>Manage Orders</h4>
        <ul>
          {
            orders.map(order =>
              <li key={order.id}>
                Order #: {order.id}<br />
                Items :<ul>{order.lineItems.map(item => <li key={item.id}>{item.product.name} - Quantity {item.product.qaantity}</li>)}</ul>
                Order Total: ${order.total}<br />
                User: {order.userId}
                <button>Delete Button</button>
                <br /> <br />
              </li>)
          }
        </ul>
      </div >
    )
  }
};
const Orders = connect (({orders, lineItems})=>{orders, lineItems})(_Orders);
export default Orders;
