import React from "react";
import styled from "styled-components";
import { SECONDARY_DARK, FONT_DARK } from "../../../../style/constants";
import PropTypes from "prop-types";
import { GENRES } from "../../../../constants/Constants";

const MovieCardImage = styled.img`
  width: 100%;
  height: 20%;
`;

const MovieCardInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MovieCardTitle = styled.span`
  color: ${FONT_DARK};
`;

const MovieCardReleaseDate = styled.div`
  border: 2px solid ${SECONDARY_DARK};
  border-radius: 0.2rem;
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
  color: ${SECONDARY_DARK};
`;

const MovieCardGenres = styled.span`
  width: 100%;
  font-size: 0.8rem;
  color: ${SECONDARY_DARK};
`;

const MovieCard = (props) => {
  const {
    movie: { poster, title, releaseDate, genres },
  } = props;
  const releaseYear = releaseDate.getFullYear();

  return (
    <>
      <MovieCardImage src={poster} />
      <MovieCardInfo>
        <MovieCardTitle>{title}</MovieCardTitle>
        <MovieCardReleaseDate>{releaseYear}</MovieCardReleaseDate>
        <MovieCardGenres>{genres}</MovieCardGenres>
      </MovieCardInfo>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    releaseDate: PropTypes.instanceOf(Date),
    genres: PropTypes.oneOf(GENRES),
    poster: PropTypes.string,
  }),
};

export default MovieCard;
