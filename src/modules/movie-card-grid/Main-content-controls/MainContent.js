import React from "react";
import styled from "styled-components";
import Controls from "./Controls";
import MovieCardGrid from "../MovieCardGrid";
const Wrapper = styled.div`
  margin-top: 10px;
  background: #232323;
  padding: 15px 40px;
`;

const MainContent = () => (
  <Wrapper>
    <Controls />
    <MovieCardGrid />
  </Wrapper>
);

export default MainContent;
