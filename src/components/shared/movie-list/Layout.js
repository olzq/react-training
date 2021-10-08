import React from "react"
import styled from "styled-components"
import Controls from "./Controls";
const LayoutDiv = styled.div`
    margin-top: 10px;
    background: #232323;
    height: 50vh;
    padding: 15px 40px;
`;



const Layout = () => 
<LayoutDiv>
    <Controls/>
</LayoutDiv>

export default Layout