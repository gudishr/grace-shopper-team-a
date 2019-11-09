const express = require('express');
const db = require('./DB/db');
const { conn, models: { User, Guest, Product, Payment, Order, OrderDetail, Cart, Lineitem } } = db;
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const router = express.Router();

router.use(express.json());

router.get('/api/users', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users.map(user =>({
      id: user.id,
      email: user.email,
      name: user.name
    })))
  }
  catch(ex) {
    next(ex)
  }
});

router.post('/api/users', async (req, res, next) => {
  try {
    const user = User.create(req.body)
    res.status(201).send(user)
  }
  catch(ex) {
    next(ex)
  }
})

router.get('/api/products', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products)
  }
  catch(ex) {
    next(ex)
  }
});

router.get('/api/products/:id', async (req, res, next) => {
  try {
    const products = await Product.findByPk(req.params.id);
    res.send(products)
  }
  catch(ex) {
    next(ex)
  }
});

router.get('/api/cart', async ( req, res, next ) => {
  try {
    const cart = await Lineitem.findAll( { include: [ Product ] });
    res.send(cart);
  }
  catch(ex) {
    next(ex)
  }
});

router.post('/api/cart', async (req, res, next) => {
  try {
    const item = await Lineitem.create(req.body)
    const product = await Product.findByPk(item.productId)
    const asmrtist = Object.assign({product}, item)
    res.status(201).json({...item, product})
  }
  catch(ex) {
    next(ex)
  }
});

router.get('/api/orders', async(req, res, next) => {
  res.send(await OrderDetail.findAll())
})

router.post('/api/orders', async(req, res, next) => {
  const order = await OrderDetail.create(req.body)
  res.send(order);
})

router.put('/api/cart', async ( req, res, next ) => {
  try {
    const instance = await Lineitem.findByPk(req.body.id, {include: [Product]});
    if (req.body.method === 'add') {
      instance.quantity = ++instance.quantity;
    }
    if (req.body.method === 'subtract' && instance.quantity > 1) {
      instance.quantity = --instance.quantity;
    }
    instance.save();

    res.send(instance);
  }
  catch(ex) {
    next(ex)
  }
});

//cartID to send in for validation

router.delete('/api/cart/:id', async ( req, res, next ) => {
  try {
    await Cart.destroy({ where: {id: req.params.id} });
    res.sendStatus(201);
  }
  catch(ex) {
    next(ex);
  }
});

router.get('/orders', (req, res, next) => {
  Order.findAll({includes: [lineItems]})
    .then(orders => res.send(orders))
    .catch(next);
});

// router.get('/api/admin', async ( req, res, next ) => {
//   console.log('req',req.user);
//    try {
//     const admin = await Product.findAll();
//     res.send(admin);
//    }
//    catch(ex) {
//      next(ex)
//   }
// });



//these lines serialize the user
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})


///using connect-sess-seq to create model for db to log sessions into the store fluidly
const ourStore =  new SequelizeStore({ db: conn });

//middleware for the store
router.use(session({
  secret: 'playback4321',
  store: ourStore,
  resave: false,
  proxy: true
}));

///sync sessions to store
ourStore.sync();

//passport middleware to create sessions
router.use(passport.initialize());
router.use(passport.session());
router.use(express.urlencoded({extended: true}))

////post route, first finds user with email => if not valid email, err, => if email exits but password doesnt match, err => both match, session logs in
router.post('/api/login', (req, res, next) => {
  User.findOne({where:{email: req.body.email}})
    .then(user => {
      if (!user){
        res.status(401).send('Wrong email and/or password');
      } else if (!user.correctPassword(req.body.password, user)){
        req.status(401).send('Wrong email and/or password');
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)));
        //res.redirect('/api/products');
      }
    })
    .catch(next)
  });

////for sign up once we have it, create user with body info, once created, logs in. if not created because email exists in db, error occurs
router.post('/api/register', (req, res, next)=>{
  User.create(req.body)
    .then(user => {
      req.session.user = user
      req.login(user, err => (err ? next(err) : res.json(user)))
    })
    .catch(err => {
      if(err.name === 'SequelizeUniqueConstraintError'){
        res.status(401).send('User already xists');
      } else {
        next(err)
      }
    })
})

////logout button link, deletes session and sends back to home
router.delete('/api/logout', (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.redirect('/api/');
});

router.get('/api/me', (req, res, next)=>{
  res.json(req.user);
});


module.exports = router;
