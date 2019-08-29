var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Photos = require('../database/index.js');

app.use(express.static('./client/dist'));
app.use(express.static('http://hrr40-fec2-movie-list.s3-website.ca-central-1.amazonaws.com'));

app.get('/api/photos', (req, res) => {
  Photos.find().limit(10)
    .then((data) => {
      res.send(data).status(200);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/api/allPhotos', (req, res) => {
  Photos.find().limit(1)
    .then((photos) => {
      var photoArray = photos.map((photo) => {
        return  photo.imageUrls;
      });
      photoArray = photoArray.shift();
      res.send(photoArray).status(200);
    })
    .catch((error) => {
      console.log(error);
    });
});



module.exports = app;