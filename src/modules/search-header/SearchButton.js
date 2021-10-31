import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  height: 27px;
  font-size: larger;
  padding: 10px 15px;
  height: auto;
  margin-left: 15px;
  width: 233px;
  height: 57px;
  background: #f65261;
  border-radius: 4px;
  border: 0px;
`;

const SearchButton = () => <Button>SEARCH</Button>;

export default SearchButton;
