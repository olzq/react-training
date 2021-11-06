import React from "react";
import styled from "styled-components";
import MovieCard from "./movie-card/MovieCard";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  align-content: center;
  justify-items: center;
  grid-gap: 1em;
`;

const MovieCardGrid = (props) => {
  const { movies } = props;
  return (
    <Wrapper>
      {movies.map((movie, idx) => (
        <MovieCard key={idx} movie={movie} />
      ))}
    </Wrapper>
  );
};

MovieCardGrid.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      releaseDate: PropTypes.instanceOf(Date),
      genres: PropTypes.string,
      poster: PropTypes.string,
    })
  ),
};

export default MovieCardGrid;
