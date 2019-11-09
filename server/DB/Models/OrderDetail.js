const Sequelize = require('sequelize');
const conn = require('../conn');
const { UUID, UUIDV4, INTEGER, STRING } = Sequelize;

const OrderDetail = conn.define('orderDetail', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  price: {
    type: INTEGER
  },
  quantity: {
    type: INTEGER
  },
  imageURL: STRING,
  name: {
    type: STRING
  }
});

module.exports = OrderDetail;
