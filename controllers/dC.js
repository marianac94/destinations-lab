const express = require('express');
const router = express.Router();

// calling the model that the controller need.
const Destinations = require('../model/destinations');


// show all destinations.
router.get('/', (req, res) => {
  Destinations.find({}, (err, allDestinations) => {
    if (err) {
      console.log(err);
    } else {
      console.log(allDestinations);
      res.render('index.ejs', {
        destinations: Destinations
      });
    }
  });
});


// create new destination.
router.post('/', (req, res) => {
  Destinations.create({
    name: 'Tulum',
    fly: true,
    Climate: 'hot',
    image: 'https://exp.cdn-hotels.com/hotels/5000000/4520000/4515800/4515733/4c6016ed_z.jpg'
  }, (err, createdDestinations) => {
    if (err) {
      console.log(err);
    } else {
      console.log(createdDestinations);
      res.redirect('/destinations')
    }
  })
});



module.exports = router;
