const Sequelize = require('sequelize');
const conn = require('../conn')
const { UUID, UUIDV4, INTEGER } = Sequelize;

const Order = conn.define('order', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  price: { //total cost/sale
    type: INTEGER
  },
  quantity: {
    type: INTEGER
  }
});

module.exports = Order;
