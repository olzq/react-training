import avengersPoster from "../assets/images/avengers.jpg";
import bohemianRhapsodyPoster from "../assets/images/rapsody.jpg";
import inceptionPoster from "../assets/images/inception.jpg";
import killBillPoster from "../assets/images/kill-bill.jpg";
import pulpFictionPoster from "../assets/images/pulp-fiction.jpg";
import reservoirDogsPoster from "../assets/images/reservoir-dogs.jpg";
import { GENRES } from "../components/shared/Constants";
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
    GENRES[0],
    avengersPoster
  ),
  createMovie("Inception", new Date(2010, 8, 6), GENRES[0], inceptionPoster),
  createMovie(
    "Pulp Fiction",
    new Date(1998, 9, 14),
    GENRES[1],
    pulpFictionPoster
  ),
  createMovie(
    "Reservoir Dogs",
    new Date(1990, 9, 14),
    GENRES[2],
    reservoirDogsPoster
  ),
  createMovie(
    "Bohemian Rhapsody",
    new Date(2018, 1, 28),
    GENRES[3],
    bohemianRhapsodyPoster
  ),
  createMovie("Kill Bill", new Date(2005, 3, 21), GENRES[4], killBillPoster),
];

const MovieService = {
  getMovies: () => movies,
};

export default MovieService;
