import React from "react";
import styled from "styled-components";
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

const Sorter = () => (
  <MovieSortDropdown>
    <MovieSortText>SORT BY</MovieSortText>
    <Dropdown>
      <option value={SORT_OPTION_VALUES.RELEASE_DATE}>RELEASE DATE</option>
      <option value={SORT_OPTION_VALUES.TITLE}>TITLE</option>
    </Dropdown>
  </MovieSortDropdown>
);

export default Sorter;
