const express = require('express');

const router = express.Router();

router.get('/test', (req, res) => {
  res.send('hit /test');
});

router.get('/test2', (req, res, next) => {
  next();
});

module.exports = router;
