const Sequelize = require('sequelize');
const conn = require('../conn')
const Product = require('./Product');
const { STRING, UUID, UUIDV4, INTEGER, DECIMAL} = Sequelize;

const Lineitem = conn.define('lineitem', {
  name: STRING,
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  quantity: {
    type: INTEGER,
    validate: {
      min : 1
    }
  },
  itemPrice: {
    type: DECIMAL
  }
});

module.exports = Lineitem;
