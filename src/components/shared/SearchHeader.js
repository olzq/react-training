import React from "react"
import styled from "styled-components";
import backGroundImage from "../../images/header-blured-dark.jpg"

const Wrapper = styled.header`
    background-image: url(${backGroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    content: center;
`;

const SearchHeader = () => 
<Wrapper>
    <div style={{minHeight: 150}}>

    </div>
</Wrapper>

export default SearchHeader