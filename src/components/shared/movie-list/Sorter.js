import React from 'react';
import styled from 'styled-components';

const MovieSortDropdown = styled.span`
    float: right
`;

const MovieSortText = styled.span`
    margin-right: 5px;
`;

const Dropdown = styled.select`
    background-color: transparent;
    color: white;
    border: none;
`;


const Sorter = () => 
  <MovieSortDropdown>
      <MovieSortText>SORT BY</MovieSortText>
      <Dropdown>
         <option value="0">RELEASE DATE</option>
         <option value="1">TITLE</option>
      </Dropdown>
  </MovieSortDropdown>


export default Sorter;