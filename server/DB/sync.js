const conn = require('./conn');
const User = require('./Models/User');
const Product = require('./Models/Product');
const Lineitem = require('./Models/LineItem');
const Order = require('./Models/Order')

const sync = async () => {
  await conn.sync({ force: true });

  const users = [
    {name: 'Shruti', email: 'shruti@email.com', password: 'SHRUTI'},
    {name: 'Akshay', email: 'akshay@email.com', password: 'AKSHAY'},
    {name: 'Oscar', email: 'oscar@email.com', password: 'OSCAR'},
    {name: 'Alexandra', email: 'alexandra@email.com', password: 'ALEXANDRA'},
  ]

  const [ Shruti, Akshay, Oscar, Alexandra ] = await Promise.all(users.map( user => User.create(user)));

  const products = [
    {imageURL: 'https://images-na.ssl-images-amazon.com/images/I/81yf0WsEsWL._SL1425_.jpg', name: 'Led Zeppelin IV', artist: 'Led Zeppelin', description: 'Deluxe Edition Remastered', price: 40, quantity: 5, genre: 'Rock'},

    {imageURL: 'https://images-na.ssl-images-amazon.com/images/I/813n86QZJfL._SX522_.jpg', name: 'Loaded', artist: 'The Velvet Underground', description: 'LP (12" album, 33 rpm)', price: 44, quantity: 4, genre: 'Rock'},

    {imageURL: 'https://images-na.ssl-images-amazon.com/images/I/812VStKC4FL._SX522_.jpg', name: 'Doolittle', artist:'Pixies', description: '180 gram', price: 54, quantity: 4, genre: 'Alternative'},
    {imageURL: 'https://images-na.ssl-images-amazon.com/images/I/91fG8D-F8pL._SX522_.jpg', name: 'Speaking Tongues', artist: 'Talking Heads', description: '180 gram', price: 72, quantity: 4, genre: 'New Wave'},
    {imageURL: 'https://images-na.ssl-images-amazon.com/images/I/81Xu7nwKp5L._SX522_.jpg', name: 'Thrust', artist: 'Herbie Hancock', description: 'LP (12" album, 33 rpm)', price: 37, quantity: 5, genre: 'Jazz'},
    {imageURL: 'https://images-na.ssl-images-amazon.com/images/I/81pe85y7VjL._SX522_.jpg', name: 'Are You Experienced', artist: 'Jimi Hendrix', description: 'LP (12" album, 33 rpm)', price: 72, quantity: 4, genre: 'Rock'},
    {imageURL: 'https://images-na.ssl-images-amazon.com/images/I/81JpiFmbTEL._SX522_.jpg', name: 'Exile On Main Street', artist: 'The Rolling Stones', description: 'Party Mix', price: 59, quantity: 4, genre: 'Rock'},
    {imageURL: 'https://images-na.ssl-images-amazon.com/images/I/91%2B9OVN138L._SX522_.jpg', name: 'Ziggy Stardust', artist: 'David Bowie', description: 'Limited Edition 180 gram - Remastered', price: 45, quantity: 4, genre: 'Rock'},
    {imageURL: 'https://images-na.ssl-images-amazon.com/images/I/81QzRZ4UoNL._SX522_.jpg', name: 'The Wall', artist: 'Pink Floyd', description: '180 gram', price: 71, quantity: 4, genre: 'Rock'}


  ]

  const [ ledZeppelin, loaded, doolittle, speakingTongues, thrust, areYouExperienced, exileOnMainStreet, ziggyStardust, theWall] = await Promise.all(products.map( product => Product.create(product)));

  const orders = [
    {price: 85.8, userId: Alexandra.id, purchased: true}, //2 scorpions - done
    {price: 95.5, userId: Akshay.id, purchased: false}, // one vintage retro I and vintage retro II
    {price: 77.2, userId: Oscar.id, purchased: true }, //one Retro party mix I
    {price: 82.6, userId: Shruti.id, purchased: false} //Scorpion and BC
  ]

  const [ order1, order2, order3, order4 ] = await Promise.all(orders.map( order => Order.create(order)));

  const lineitems =[
    {quantity : 2, productId : thrust.id, orderId : order2.id},
    {quantity : 1, productId : loaded.id, orderId : order2.id},
    {quantity : 1, productId : theWall.id, orderId : order4.id}
  ]

  await Promise.all(lineitems.map( item => Lineitem.create(item)));
};

module.exports = sync;
