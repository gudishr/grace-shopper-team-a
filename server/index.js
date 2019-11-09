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
app.get('/styles.css', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '../styles.css'));
})

app.use('/', routes);

db.sync()
  .then(() => {
app.listen(port, ()=> console.log(`listening on port ${port}`));
});
