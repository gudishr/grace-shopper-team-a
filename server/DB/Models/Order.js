const Sequelize = require('sequelize');
const conn = require('../conn')
const { UUID, UUIDV4, DECIMAL, BOOLEAN } = Sequelize;

const Order = conn.define('order', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  price: { //total cost/sale
    type: DECIMAL
  },
  purchased: {
    type: BOOLEAN,
    defaultValue: false
  }
});

module.exports = Order;
