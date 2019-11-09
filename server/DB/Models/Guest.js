const Sequelize = require('sequelize');
const conn = require('../conn')
const { STRING, UUID, UUIDV4} = Sequelize;

const Guest = conn.define('guest', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  email: {
    type: STRING
  }
});

module.exports = Guest;
