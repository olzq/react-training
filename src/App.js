import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MAIN_BACKGROUND_COLOR, WHITE } from "./style/constants";

const Div = styled.div`
  background-color: ${MAIN_BACKGROUND_COLOR};
  font-family: "Roboto", sans-serif;
  color: ${WHITE};
  padding: 52px 0px 52px 52px;
`;
const App = ({ children }) => <Div>{children}</Div>;

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
