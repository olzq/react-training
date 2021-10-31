import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { SECONDARY_DARK, FONT_DARK } from "../../../style/constants";
import { useState, useRef } from "react";

import { RedButton } from "../../../common";
import { EditMovieModal, DeleteMovieModal } from "../../modals";
import { GENRES } from "../../../constants/Constants";

const MovieCardDropdownOption = styled(RedButton)`
  display: none;
`;

const Wrapper = styled.div`
  position: relative;
  &:hover ${MovieCardDropdownOption} {
    display: block;
  }
`;

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

const MovieCardDropdownButton = styled.div`
  position: absolute;
  right: 0;
`;

const MovieCard = (props) => {
  const [movie, setMovie] = useState(props.movie);

  const editMovieModalRef = useRef(null);
  const closeEditButtonRef = useRef(null);
  const [isEditMovieShown, setIsEditMovieShown] = useState(false);

  const deleteMovieModalRef = useRef(null);
  const closeDeleteButtonRef = useRef(null);
  const [isDeleteMovieShown, setIsDeleteMovieShown] = useState(false);

  const handleCloseEditMovieModal = () => setIsEditMovieShown(false);
  const handleShowEditMovieModal = () => setIsEditMovieShown(true);
  const handleEditMovieSubmit = () => alert("Not implemented yet!");

  const handleCloseDeleteMovieModal = () => setIsDeleteMovieShown(false);
  const handleShowDeleteMovieModal = () => setIsDeleteMovieShown(true);
  const handleDeleteMovieSubmit = () => alert("Not implemented yet!");

  const {
    movie: { poster, title, releaseDate, genres },
  } = props;
  const releaseYear = releaseDate.getFullYear();

  return (
    <Wrapper>
      <MovieCardDropdownButton>
        <MovieCardDropdownOption onClick={handleShowEditMovieModal}>
          Edit
        </MovieCardDropdownOption>
        <MovieCardDropdownOption onClick={handleShowDeleteMovieModal}>
          Delete
        </MovieCardDropdownOption>
      </MovieCardDropdownButton>
      <MovieCardImage src={poster} />
      <MovieCardInfo>
        <MovieCardTitle>{title}</MovieCardTitle>
        <MovieCardReleaseDate>{releaseYear}</MovieCardReleaseDate>
        <MovieCardGenres>{genres}</MovieCardGenres>
      </MovieCardInfo>
      {isEditMovieShown && (
        <EditMovieModal
          onSubmit={handleEditMovieSubmit}
          modalRef={editMovieModalRef}
          closeButtonRef={closeEditButtonRef}
          onCloseClick={handleCloseEditMovieModal}
        />
      )}
      {isDeleteMovieShown && (
        <DeleteMovieModal
          onSubmit={handleDeleteMovieSubmit}
          modalRef={deleteMovieModalRef}
          closeButtonRef={closeDeleteButtonRef}
          onCloseClick={handleCloseDeleteMovieModal}
        />
      )}
    </Wrapper>
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
