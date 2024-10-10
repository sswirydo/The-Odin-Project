
const express = require('express');
const router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


router.route('/')
  .get((req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
  });

router.route('/new')
  .get((req, res) => {
    res.render('form');
  })
  .post((req, res) => {
    const msg = {
      text: req.body.text,
      user: req.body.user,
      added: new Date()
    }
    messages.push(msg);
    res.redirect('/');
  })




module.exports = router;