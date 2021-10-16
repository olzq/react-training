import React from "react";
import styled from "styled-components";
import { SECONDARY_DARK } from "../../style/constants";
import NetflixLabel from "./search-header/NetflixLabel";

const Wrapper = styled.footer`
  padding: 1em 1em;
  text-align: center;
  background-color: ${SECONDARY_DARK};
`;

const Footer = () => (
  <div>
    <Wrapper>
      <NetflixLabel />
    </Wrapper>
  </div>
);

export default Footer;
