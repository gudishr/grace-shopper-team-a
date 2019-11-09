const Sequelize = require('sequelize');
const conn = require('../conn')
const { STRING, UUID, UUIDV4 } = Sequelize;

const Payment = conn.define('payment', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  // price: {
  //   type: INTEGER
  // }
});

module.exports = Payment
