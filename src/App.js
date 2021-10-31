import React from "react";
import HomePage from "./pages/HomePage";
import styled from "styled-components";
import { PRIMARY_DARK, WHITE } from "./style/constants";

const Wrapper = styled.div`
  background-color: ${PRIMARY_DARK};
  font-family: "Roboto", sans-serif;
  color: ${WHITE};
`;

const App = () => (
  <Wrapper>
    <HomePage />
  </Wrapper>
);

export default App;
