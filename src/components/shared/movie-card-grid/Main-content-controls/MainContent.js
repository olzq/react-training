import React from "react";
import styled from "styled-components";
import Controls from "./Controls";
import MovieCardGrid from "../MovieCardGrid";
const LayoutDiv = styled.div`
  margin-top: 10px;
  background: #232323;
  padding: 15px 40px;
`;

const MainContent = () => (
  <LayoutDiv>
    <Controls />
    <MovieCardGrid />
  </LayoutDiv>
);

export default MainContent;
