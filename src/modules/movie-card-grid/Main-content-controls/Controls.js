import React from "react";
import styled from "styled-components";
import GenreTabs from "./GenreTabs";
import Sorter from "./Sorter";
import MoviesFound from "./MoviesFound";
import PropTypes, { oneOfType } from "prop-types";
import { GENRES } from "../../../constants/Constants";

const Wrapper = styled.div`
  min-width: 100%;
  width: 100%;
`;

const Controls = (props) => (
  <Wrapper>
    <GenreTabs
      genres={props.genres}
      activeFilter={props.activeFilter}
      onClick={props.onFilterClick}
    />
    <Sorter onSortChange={props.onSortChange} />
    <MoviesFound count={props.moviesFound} />
  </Wrapper>
);

Controls.propTypes = {
  onSortChange: PropTypes.func.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  activeFilter: PropTypes.oneOf(GENRES),
  moviesFound: PropTypes.number,
};

Controls.defaultProps = {
  moviesFound: 0,
};

export default Controls;
