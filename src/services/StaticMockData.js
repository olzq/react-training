import avengersPoster from "../images/avengers.jpg";
import bohemianRhapsodyPoster from "../images/rapsody.jpg";
import inceptionPoster from "../images/inception.jpg";
import killBillPoster from "../images/kill-bill.jpg";
import pulpFictionPoster from "../images/pulp-fiction.jpg";
import reservoirDogsPoster from "../images/reservoir-dogs.jpg";

function createMovie(title, releaseDate, genres, poster) {
  return {
    title: title,
    releaseDate: releaseDate,
    genres: genres,
    poster: poster,
  };
}

const movies = [
  createMovie(
    "Marvel's Avengers",
    new Date(2012, 11, 10),
    "genre",
    avengersPoster
  ),
  createMovie("Inception", new Date(2010, 8, 6), "genre", inceptionPoster),
  createMovie(
    "Pulp Fiction",
    new Date(1998, 9, 14),
    "genre",
    pulpFictionPoster
  ),
  createMovie(
    "Reservoir Dogs",
    new Date(1990, 9, 14),
    "genre",
    reservoirDogsPoster
  ),
  createMovie(
    "Bohemian Rhapsody",
    new Date(2018, 1, 28),
    "genre",
    bohemianRhapsodyPoster
  ),
  createMovie("Kill Bill", new Date(2005, 3, 21), "genre", killBillPoster),
];

const Genres = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

const MovieService = {
  getMovies: () => movies,
};

export default MovieService;
export { Genres };
