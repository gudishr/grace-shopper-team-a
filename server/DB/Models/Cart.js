const Sequelize = require('sequelize');
const conn = require('../conn');
const {UUID, UUIDV4, BOOLEAN } = Sequelize;

const Cart = conn.define('cart', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  purchased: {
    type: BOOLEAN,
    defaultValue: false
  }
});

module.exports = Cart;
