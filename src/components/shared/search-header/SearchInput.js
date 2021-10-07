import React from "react"
import styled from "styled-components";

const Input = styled.input`
    width: 692px;
    height: 57px;
    background: rgba(50, 50, 50, 0.8);
    mix-blend-mode: normal;
    opacity: 0.7;
    border-radius: 4px;
    padding-left: 15px;
    font-size: 22px;
`;

const SearchInput = () => <Input 
                            placeholder="What do you want to watch?"
                          />

export default SearchInput