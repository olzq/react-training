import avengersPoster from "../images/avengers.jpg";
import bohemianRhapsodyPoster from "../images/rapsody.jpg";
import inceptionPoster from "../images/inception.jpg";
import killBillPoster from "../images/kill-bill.jpg";
import pulpFictionPoster from "../images/pulp-fiction.jpg";
import reservoirDogsPoster from "../images/reservoir-dogs.jpg";

class Movie {
  constructor(title, releaseDate, genres, poster) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.genres = genres;
    this.poster = poster;
  }
}

const movies = [
  new Movie(
    "Marvel's Avengers",
    new Date(2012, 11, 10),
    "genre",
    avengersPoster
  ),
  new Movie("Inception", new Date(2010, 8, 6), "genre", inceptionPoster),
  new Movie("Pulp Fiction", new Date(1998, 9, 14), "genre", pulpFictionPoster),
  new Movie(
    "Reservoir Dogs",
    new Date(1990, 9, 14),
    "genre",
    reservoirDogsPoster
  ),
  new Movie(
    "Bohemian Rhapsody",
    new Date(2018, 1, 28),
    "genre",
    bohemianRhapsodyPoster
  ),
  new Movie("Kill Bill", new Date(2005, 3, 21), "genre", killBillPoster),
];

const genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

const MovieService = {
  getMovies: () => movies,
  getGenres: () => genres,
};

export default MovieService;
