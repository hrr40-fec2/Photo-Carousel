var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;

app.get('/api/photos', (req, res) => {

});

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
})