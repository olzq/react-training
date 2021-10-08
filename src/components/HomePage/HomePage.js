import React from 'react';  
import SearchHeader from '../shared/search-header/SearchHeader'
import MovieCardGrid from '../shared/movie-cards-grid/MovieCardGrid'
import Footer from '../shared/Footer'
import ControlsLayout from '../shared/Main-content-controls/ControlsLayout';
const HomePage = () => 
<>
    <SearchHeader />
    <ControlsLayout/>
    <MovieCardGrid />
    <Footer />
</>
export default HomePage;  