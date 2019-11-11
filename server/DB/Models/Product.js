const Sequelize = require('sequelize');
const conn = require('../conn.js');
const { STRING, UUID, UUIDV4, INTEGER, ENUM } = Sequelize;

const Product = conn.define('product', {
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
  description: {
    type: STRING
  },
  price: {
    type: INTEGER
  },
  quantity: {
    type: INTEGER
  },
  imageURL: {
    type: STRING,
    defaultValue: 'https://i.pinimg.com/736x/6d/82/a5/6d82a57b6268a57a4b46d6ece3ea7f3d--vintage-music-vintage-stuff.jpg'
  },
  genre: {
    type: ENUM('Rap', 'Rock', 'R&B', 'Alternative', 'Metal', 'Classic', 'Retro')
  }
});

module.exports = Product;
