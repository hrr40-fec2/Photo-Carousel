var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/images', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {});

var photoSchema = new mongoose.Schema({
  title: String,
  director: String,
  cast: [String],
  mpaaRating: String,
  summary: String,
  releaseDate: String,
  imdbRating: Number,
  runtime: String,
  genre: [String],
  imageUrls: [String]
});

var Photos = mongoose.model('Photo', photoSchema);

module.exports =  Photos;