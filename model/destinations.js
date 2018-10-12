const mongoose = require('mongoose');

const destinationsSchema = new mongoose.Schema({
  name: {type: String, required: true},
  fly: Boolean,
  climate: String,
  image: String
});

module.exports = mongoose.model('Destinations', destinationsSchema);
