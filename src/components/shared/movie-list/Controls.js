import React from 'react';
import styled from 'styled-components';
import GenreTabs from './GenreTabs';
import Sorter from './Sorter'
import MoviesFound from './MoviesFound';
const Wrapper = styled.div`
    min-width: 100%;
    width: 100%;
`;

const Controls = () => 
    <Wrapper>
        <GenreTabs/>
        <Sorter/>
        <MoviesFound count={30}/>
    </Wrapper>


export default Controls;