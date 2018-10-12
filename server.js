const express = require('express');
const app = express();
const methodOVerride = require('method-override');
const bodyParser = require('body-parser');

require('./db/db');

const destinationsController = require('./controllers/dC');

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(methodOVerride('_method'));
app.use('/destinations', destinationsController);



app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
