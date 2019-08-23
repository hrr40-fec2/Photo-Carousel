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

var imageUrls = [
'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/1.jpg', 'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/2.jpg', 'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/3.jpg', 'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/4.jpg',
'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/5.jpg',
'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/6.jpg', 'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/7.jpg', 'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/8.jpg', 'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/9.jpg',
'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/10.jpg',
'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/11.jpg', 'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/12.jpg', 'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/13.jpg', 'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/14.jpg',
'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/15.jpg',
'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/16.jpg', 'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/17.jpg', 'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/18.jpg', 'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/19.jpg',
'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/20.jpg',
'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/21.jpg', 'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/22.jpg', 'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/23.jpg', 'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/24.jpg',
'https://hrr40-fec2-movie-list.s3.ca-central-1.amazonaws.com/movie-images/25.jpg'
];

var randomImages = () => {
  return imageUrls[Math.floor(Math.random() * 25)];
};

var createMovie = () => {
  var movie = {
    title: faker.lorem.words(),
    director: faker.name.findName(),
    cast: [faker.name.findName(),faker.name.findName(),faker.name.findName()],
    mpaaRating: randomRating(),
    summary: faker.lorem.paragraph(),
    releaseDate: faker.date.recent(),
    imdbRatings: (Math.floor(Math.random() * 5)),
    runtime: `${Math.floor(Math.random() * 300)} mins`
    genre: [randomGenre(), randomGenre(), randomGenre()],
    imageUrls: [randomImages(), randomImages(), randomImages(), randomImages()]
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