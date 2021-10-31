import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { SORT_OPTION_VALUES } from "../../../constants/Constants";

const MovieSortDropdown = styled.span`
  float: right;
`;

const MovieSortText = styled.span`
  margin-right: 5px;
`;

const Dropdown = styled.select`
  background-color: transparent;
  color: white;
  border: none;
`;

const Sorter = (props) => (
  <MovieSortDropdown>
    <MovieSortText>SORT BY</MovieSortText>
    <Dropdown onChange={props.onSortChange}>
      <option value={SORT_OPTION_VALUES.RELEASE_DATE}>RELEASE DATE</option>
      <option value={SORT_OPTION_VALUES.TITLE}>TITLE</option>
    </Dropdown>
  </MovieSortDropdown>
);

Sorter.propTypes = {
  onSortChange: PropTypes.func.isRequired,
};

export default Sorter;
