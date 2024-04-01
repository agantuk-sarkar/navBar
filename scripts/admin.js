// getting submit form html element into js
const admin_form = document.querySelector(".movie-form");

// array to store form input values
const movie_array = JSON.parse(localStorage.getItem("movieShows")) || [];

// using constructor to create objects which will store input values
class Movie {
  constructor(movieName, movieImages, releaseDate, imdbRating) {
    this.name = movieName;
    this.image = movieImages;
    this.releaseDate = releaseDate;
    this.rating = imdbRating;
  }
}

// submit form event
admin_form.addEventListener("submit", function (event) {
  event.preventDefault();

  // getting all form input elements into js
  const images = document.getElementById("images").value;
  const movie_name = document.getElementById("name").value;
  const release_date = document.getElementById("releaseDate").value;
  const imdb_rating = document.getElementById("imdbRating").value;

  // using new keyword to create new object everytime
  const movie = new Movie(movie_name,images,release_date,imdb_rating);

  // pushing the newly created object into the movie array
  movie_array.push(movie);

  // storing the new array of objects into localStorage
  localStorage.setItem("movieShows", JSON.stringify(movie_array));
});
