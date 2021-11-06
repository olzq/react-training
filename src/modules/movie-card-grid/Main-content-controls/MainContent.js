import React, { Component } from "react";
import styled from "styled-components";
import Controls from "./Controls";
import MovieCardGrid from "../MovieCardGrid";
import MovieService from "../../../utils/services/StaticMockData";
const Wrapper = styled.div`
  margin-top: 10px;
  background: #232323;
  padding: 15px 40px;
`;

class MainContent extends Component {
  state = {
    movies: [],
    genres: [],
    activeFilter: "ALL",
    activeSort: "TITLE",
  };

  componentDidMount() {
    MovieService.getMovies().then((m) => {
      this.setState({
        movies: m,
      });
    });
    MovieService.getGenres().then((g) => {
      this.setState({
        genres: g,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeFilter !== this.state.activeFilter) {
      MovieService.getMovies().then((m) =>
        this.setState({ movies: this.sortMovies(this.filterMovies(m)) })
      );
    } else if (prevState.activeSort !== this.state.activeSort) {
      const movies = this.sortMovies(this.state.movies);
      this.setState({ movies: movies });
    }
  }

  filterMovies = (movies) => {
    const activeFilter = this.state.activeFilter;
    return activeFilter === "ALL"
      ? movies
      : movies.filter((movie) => movie.genres.includes(activeFilter));
  };

  sortMovies = (movies) => {
    return movies.sort((a, b) => {
      switch (this.state.activeSort) {
        case "RELEASE_DATE":
          return b.releaseDate - a.releaseDate;
        case "TITLE":
          return a.title.localeCompare(b.title);
      }
    });
  };

  getMovieCatalog = (movies, filter, sort) => {
    const filtered = this.filterMovies(movies, filter);
    const sorted = this.sortMovies(filtered, sort);
    return sorted;
  };

  handleFilterChange = (e) => {
    const filterValue = e.target.text;
    this.setState({
      activeFilter: filterValue,
    });
  };

  handleSortChange = (e) => {
    const sortValue = e.target.value;
    this.setState({
      activeSort: sortValue,
    });
  };

  render() {
    const { genres, activeFilter, movies } = this.state;
    return (
      <Wrapper>
        <Controls
          genres={genres}
          activeFilter={activeFilter}
          onFilterClick={this.handleFilterChange}
          onSortChange={this.handleSortChange}
          moviesFound={movies.length}
        />
        <MovieCardGrid movies={movies} />
      </Wrapper>
    );
  }
}

export default MainContent;
