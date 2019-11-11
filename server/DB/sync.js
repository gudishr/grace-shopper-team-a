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
    {name: 'Scorpion', description: 'Long album', price: 40, quantity: 5, genre: 'Rap'},
    {name: 'GKMC', description: 'Beautiful', price: 92, quantity: 5, genre: 'Rap'},
    {name: 'BC', description: 'Best', price: 37, quantity: 5, genre: 'R&B'},
    {name: 'Vintage Retro Vol I', description: 'Retro', price: 44, quantity: 4, genre: 'Classic'},
    {name: 'Vintage Retro Vol II', description: 'Retro', price: 45, quantity: 4, genre: 'Classic'},
    {name: 'Vintage Retro Vol III', description: 'Retro', price: 54, quantity: 4, genre: 'Classic'},
    {name: 'Vintage Retro Vol IV', description: 'Retro', price: 72, quantity: 4, genre: 'Classic'},
    {name: 'Retro Party Mix I', description: 'Party Mix', price: 72, quantity: 4, genre: 'Retro'},
    {name: 'Retro Party Mix II', description: 'Party Mix', price: 59, quantity: 4, genre: 'Retro'},
    {name: 'Retro Party Mix III', description: 'Party Mix', price: 71, quantity: 4, genre: 'Retro'},
  ]
  
  const [ Scorpion, GKMC, BC, Vintage1, Vintage2, Vintage3, Vintage4, Retro1, Retro2, Retro3] = await Promise.all(products.map( product => Product.create(product)));

  const orders = [
    {price: 85.8, userId: Alexandra.id, purchased: true}, //2 scorpions - done
    {price: 95.5, userId: Akshay.id, purchased: false}, // one vintage retro I and vintage retro II
    {price: 77.2, userId: Oscar.id, purchased: true }, //one Retro party mix I
    {price: 82.6, userId: Shruti.id, purchased: false} //Scorpion and BC
  ]

  const [ order1, order2, order3, order4 ] = await Promise.all(orders.map( order => Order.create(order)));

  const lineitems =[
    {quantity : 2, productId : Scorpion.id, orderId : order1.id},
    {quantity : 1, productId : Vintage1.id, orderId : order2.id},
    {quantity : 1, productId : Vintage2.id, orderId : order2.id},
    {quantity : 1, productId : Retro1.id, orderId : order3.id},
    {quantity : 1, productId : Scorpion.id, orderId : order4.id},
    {quantity : 1, productId : BC.id, orderId : order4.id}
  ]
  
  await Promise.all(lineitems.map( item => Lineitem.create(item)));
};

module.exports = sync;
