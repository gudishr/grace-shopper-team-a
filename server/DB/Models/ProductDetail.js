// const Sequelize = require('sequelize');
// const conn = require('../conn')
// const { STRING, UUID, UUIDV4, INTEGER, ENUM, BOOLEAN } = Sequelize;

// const ProductDetail = conn.define('productDetail', {
//   id: {
//     type: UUID,
//     primaryKey: true,
//     defaultValue: UUIDV4,
//   },
//   name: {
//     type: STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true
//     }
//   },
//   price: {
//     type: INTEGER
//   },
//   quantity: {
//     type: INTEGER
//   },
//   imageURL: {
//     type: STRING(1234),
//     defaultValue: 'randomalbumcover'
//   },
//   genre: {
//     type: ENUM('Rap', 'Rock', 'R&B', 'Alternative', 'Metal')
//   }
// });

// module.exports = ProductDetail;
