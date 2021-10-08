import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Paragraph = styled.p`
    margin-top: 30px;
    margin-bottom: 30px;
`;


const MoviesFound = ({count}) => <Paragraph>{count} movies found</Paragraph>

MoviesFound.propTypes = {
    count: PropTypes.number.isRequired
};

export default MoviesFound;