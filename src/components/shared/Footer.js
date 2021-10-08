import React from "react"
import styled from "styled-components";
import { SECONDARY_DARK } from '../../style/constants'
import NetflixLabel from "./search-header/NetflixLabel";

const FooterWrapper = styled.footer`
    padding: 1em 1em;
    text-align: center;
    background-color: ${SECONDARY_DARK};
`;

const Footer = () => <div>
    <FooterWrapper>
        <NetflixLabel/>
    </FooterWrapper>
</div>

export default Footer