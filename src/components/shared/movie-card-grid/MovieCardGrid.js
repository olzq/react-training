import React from 'react';
import styled from 'styled-components';
import MovieService from '../../../containers/StaticMockData'
import MovieCard from './movie-card/MovieCard'

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    align-content: center;
    justify-items: center;
    grid-gap: 1em;
`;

const MovieCardGrid = () => 
    <Wrapper>
        {
            MovieService
                .getMovies()
                .map((movie, idx) =>
                    <MovieCard key={idx} movie={movie} />
                )
        }
    </Wrapper>


export default MovieCardGrid;