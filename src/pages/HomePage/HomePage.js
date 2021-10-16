import React from "react";
import SearchHeader from "../../components/shared/search-header/SearchHeader";
import FooterWrapper from "../../components/shared/Footer";
import MainContent from "../../components/shared/movie-card-grid/Main-content-controls/MainContent";
const HomePage = () => (
  <>
    <SearchHeader />
    <MainContent />
    <FooterWrapper />
  </>
);
export default HomePage;
