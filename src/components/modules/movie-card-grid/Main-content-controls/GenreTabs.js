import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GENRES } from "../../../../constants/Constants";

const GenreTab = styled.span`
  padding: 10px 15px;
  border-bottom: ${({ isActive }) => isActive && `5px solid red`};
`;
GenreTab.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

const GenreTabs = () =>
  GENRES.map((val, indx) => (
    <GenreTab key={val + indx} isActive={indx === 0}>
      {val}
    </GenreTab>
  ));

export default GenreTabs;
