import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MAIN_BACKGROUND_COLOR, WHITE } from './style/constants';

const Wrapper = styled.div`
 background-color: ${MAIN_BACKGROUND_COLOR};
 font-family: "Roboto", sans-serif;
 color: ${WHITE};
 height: 100vh
`;
const App = ({ children }) => 
  <Wrapper>{children}</Wrapper>;

App.propTypes = {
   children: PropTypes.object.isRequired
 };

export default App;