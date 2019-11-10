const conn = require('./conn');
const sync = require('./sync')
const User = require('./Models/User');
const Product = require('./Models/Product');
const Order = require('./Models/Order');
const Lineitem = require('./Models/LineItem');
const Cart = require('./Models/Cart');
const Guest = require('./Models/Guest');

User.hasMany(Order);
Order.hasMany(Product);

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
    Order,
    Lineitem,
    Cart
  }
}
