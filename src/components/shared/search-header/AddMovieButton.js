import React from "react"
import styled from "styled-components";

const Button = styled.button`
    color: red;
    height: 27px;
    font-size: larger;
    padding: 10px 15px;
    height: auto;
    margin-right: 25px;
    border: 0px;
    background: rgba(96, 96, 96, 0.68);
    border-radius: 4px;
`;

const AddMovieButton = () => 
<Button>
    + ADD MOVIE
</Button>

export default AddMovieButton