const conn = require('./conn');
const sync = require('./sync')
const User = require('./Models/User');
const Product = require('./Models/Product');
const Order = require('./Models/Order');
const Lineitem = require('./Models/LineItem');
const Cart = require('./Models/Cart');
const Guest = require('./Models/Guest');
const Payment =  require('./Models/Payment');
const OrderDetail = require('./Models/OrderDetail')

User.hasMany(Order);
Order.hasMany(Product);
Payment.belongsTo(Order);
OrderDetail.belongsTo(Order);

OrderDetail.hasMany(Product);

Cart.belongsTo(User);
Cart.hasMany(Lineitem);
Lineitem.belongsTo(Cart);
Product.hasMany(Lineitem);
Lineitem.belongsTo(Product);


module.exports = {
  conn,
  sync,
  models: {
    User,
    Guest,
    Product,
    Payment,
    Order,
    OrderDetail,
    Lineitem,
    Cart
  }
}
