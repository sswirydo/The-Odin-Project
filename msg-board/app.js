
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

// easier form input access
app.use(express.urlencoded({extended: true}));


/* Middleware */
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
} app.use(logger);


/* Routes */
const indexRouter = require('./routes/index.js');
app.use('/', indexRouter);


app.listen(3000);
