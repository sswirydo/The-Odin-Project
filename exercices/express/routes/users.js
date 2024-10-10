
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.query.name);
  res.send('User list');
})

router.get('/new', (req, res) => {
  res.render('users/new', {firstName: 'first name'});
  // res.send('User new form');
})

router.post('/', (req, res) => {
  const isValid = false;
  if (isValid) {
    users.push( {name: req.body.firstName} )
    res.redirect(`/users/${users.length - 1}`)
  } else {
    console.log('Error');
    res.render('users/new', {firstName: req.body.firstName});
  }
})

router.route('/:id')
  .get((req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
  })

const users = [{name: 'Kayle'}, {name: 'Sally'}];
router.param('id', (req, res, next, id) => {
  req.user = users[id];
  next();
})



module.exports = router;