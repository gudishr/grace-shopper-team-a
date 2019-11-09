const Sequelize = require('sequelize');
const conn = require('../conn')
const { STRING, UUID, UUIDV4, INTEGER} = Sequelize;

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
});

module.exports = Lineitem;
