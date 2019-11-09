const express = require('express');
const path = require('path');
const app = express();
const db = require('./DB/db');
const port = process.env.PORT || 3005;
const routes =  require('./router');

app.use(express.json());
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use('/', routes);

//Checkout

// app.get('/api/checkout', async ( req, res, next ) => {
//   try {
//     const cart = await Lineitem.findAll( { include: [ Product ] });
//     res.send(cart);
//   }
//   catch(ex) {
//     next(ex)
//   }
// });

db.sync()
  .then(() => {
app.listen(port, ()=> console.log(`listening on port ${port}`));
});
