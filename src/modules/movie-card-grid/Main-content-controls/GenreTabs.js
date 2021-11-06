import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GENRES } from "../../../constants/Constants";
import { WHITE, PRIMARY_RED } from "../../../style/constants";

const GenreTab = styled.a`
    cursor: pointer;
    padding: 10px 15px; //TODO: change to em and percent
    text-decoration: none;
    &:link, &:visited {
        color: ${WHITE}
    }
    border-bottom: ${({isActive}) =>
        isActive && `5px solid ${PRIMARY_RED}`
    }
`;

const GenreTabs = (props) =>
  props.genres.map((genre, indx) => (
    <GenreTab
      key={indx}
      isActive={genre === props.activeFilter}
      onClick={props.onClick}
    >
      {genre}
    </GenreTab>
  ));

GenreTab.propTypes = {
  activeFilter: PropTypes.oneOf(GENRES),
  onClick: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default GenreTabs;
