const express = require('express');
const app = express();
const methodOVerride = require('method-override');
const bodyParser = require('body-parser');


app.get('/', (req, res) => {
  res.send('Its aliveeeee')
});





app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
