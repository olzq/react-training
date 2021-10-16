import React from "react";
import styled from "styled-components";
import { PRIMARY_RED } from "../../style/constants";

const RedText = styled.span`
  color: ${PRIMARY_RED};
`;

const BoldText = styled.span`
  font-weight: 700;
`;

const NetflixLabel = () => (
  <RedText>
    <BoldText>netflix</BoldText>roulette
  </RedText>
);

export default NetflixLabel;
