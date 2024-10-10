
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// app.use(express.static('public'));

app.use(express.urlencoded({extended: true})); // easier form input access
app.use(express.json()); // parse json from body

// Middleware
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.use(logger);

// Main
app.get('/', (req, res) => {
  console.log(req.method, req.url);
  res.render('index', { text: 'World'});
})

// Routers
const userRouter = require('./routes/users.js');
const { log } = require('console');
const exp = require('constants');
app.use('/users', userRouter);




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
