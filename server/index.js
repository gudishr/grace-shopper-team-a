const express = require('express');
const path = require('path');
const app = express();
const db = require('./DB/db');
const port = process.env.PORT || 3005;
<<<<<<< HEAD
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const router = require('express').Router();
// const volleyball = require('volleyball');

// app.use(volleyball);
=======
const routes =  require('./router');
>>>>>>> 1e0f6d189a875e8c04839e59541329982986382a

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/dist', express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use('/', routes);

db.sync()
  .then(() => {
app.listen(port, ()=> console.log(`listening on port ${port}`));
});

module.exports = app
