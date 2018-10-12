const express = require('express');
const router = express.Router();

const Destinations = require('../model/destinations');

router.get('/', (req, res) => {
  res.send('Its aliveeeee')
});


module.exports = router;
