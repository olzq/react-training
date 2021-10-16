import React from "react";
import HomePage from "./pages/HomePage";
import styled from "styled-components";
import { MAIN_BACKGROUND_COLOR, WHITE } from "./style/constants";

const Wrapper = styled.div`
  background-color: ${MAIN_BACKGROUND_COLOR};
  font-family: "Roboto", sans-serif;
  color: ${WHITE};
`;

const App = () => (
  <Wrapper>
    <HomePage />
  </Wrapper>
);

export default App;
