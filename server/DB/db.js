const conn = require('./conn');
const sync = require('./sync')
const User = require('./Models/User');
const Product = require('./Models/Product');
const Order = require('./Models/Order');
const Lineitem = require('./Models/LineItem');

Order.belongsTo(User);
User.hasMany(Order);

Lineitem.belongsTo(Order);
Order.hasMany(Lineitem);

Lineitem.belongsTo(Product);

module.exports = {
  conn,
  sync,
  models: {
    User,
    Product,
    Order,
    Lineitem
  }
}
