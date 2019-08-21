var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to database');
});

var photoSchema = new mongoose.Schema({
  imageUrl: String
});

var Photo = mongoose.model('Photo', photoSchema);

