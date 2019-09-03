var Photos = require('./index.js');
var faker = require('faker');

var genres = ['drama', 'thriller', 'comedy', 'horror', 'science fiction', 'romance', 'action', 'western', 'adventure', 'crime', 'documentary', 'war', 'epic', 'history', 'sports', 'noir', 'superhero', 'fantasy', 'fighting', 'gangster', 'biography', 'family', 'mystery'];

var randomGenre = () => {
  return genres[Math.floor(Math.random() * 23)];
};

var mpaaRatings = ['G', 'PG', 'PG-13', 'R'];

var randomRating = () => {
  return mpaaRatings[Math.floor(Math.random() * 4)];
};

var randomImages = () => {
  return `https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/${Math.floor(Math.random() * 26)}.jpg`;
};

var randomImagesGenerator = (imageNum) => {
  var images = [];
  for (var i = 0; i < imageNum; i++) {
    images.push(randomImages());
  }
  return images;
};

var createMovie = () => {
  var movie = {
    title: faker.lorem.words(),
    director: faker.name.findName(),
    cast: [faker.name.findName(), faker.name.findName(), faker.name.findName()],
    mpaaRating: randomRating(),
    summary: faker.lorem.paragraph(),
    releaseDate: faker.date.recent(),
    imdbRatings: (Math.floor(Math.random() * 10)),
    runtime: `${Math.floor(Math.random() * 300)} mins`,
    genre: [randomGenre(), randomGenre(), randomGenre()],
    imageUrls: randomImagesGenerator(25)
  };
  return movie;
};


var addMovies = (n) => {
  var seeds = [];
  for (var i = 0; i < n; i ++) {
    seeds.push(createMovie());
  }
  Photos.insertMany(seeds, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

addMovies(100);

module.exports = {
  randomGenre,
  randomRating,
  randomImages,
  randomImagesGenerator,
  createMovie,
  addMovies
};