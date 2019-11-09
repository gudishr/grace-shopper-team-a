const conn = require('./conn');
const User = require('./Models/User');
const Product = require('./Models/Product');
const Lineitem = require('./Models/LineItem');

const sync = async () => {
  await conn.sync({ force: false });
  // let users = [
  //   {name: 'Shruti', email: 'shruti@email.com', password: 'SHRUTI'},
  //   {name: 'Akshay', email: 'akshay@email.com', password: 'AKSHAY'},
  //   {name: 'Oscar', email: 'oscar@email.com', password: 'OSCAR'},
  //   {name: 'Alexandra', email: 'alexandra@email.com', password: 'ALEXANDRA'},
  // ]
  // const [ Shruti, Akshay, Oscar, Alexandra ] = await Promise.all(users.map( user => User.create(user)));

  // let products = [
  //   {name: 'Scorpion', description: 'Long album', price: 10, quantity: 1, genre: 'Rap'},
  //   {name: 'GKMC', description: 'Beautiful', price: 12, quantity: 1, genre: 'Rap'},
  //   {name: 'BC', description: 'Best', price: 7, quantity: 1, genre: 'R&B'}
  // ]
  // const [ Scorpion, GKMC, BC ] = await Promise.all(products.map( product => Product.create(product)));

  // let items =[
  //   {quantity : 1, productId : Scorpion.id, userId : Akshay.id},
  //   {quantity : 3, productId : BC.id, userId : Alexandra.id}
  // ]
  // await Promise.all(items.map( item => Lineitem.create(item)));

  // let payments = [
  //   {name: 'Visa'},
  //   {name: 'Discover'},
  //   {name: 'MasterCard'}
  // ]
  // const [ Visa, Discover, MasterCard ] = await Promise.all(payments.map( payment => Payment.create(payment)));

  // let orders = [
  //   {price: 15, quantity: }
  // ]
};

module.exports = sync;
