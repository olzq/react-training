import React, { Component } from "react";
import SearchHeader from "../../modules/search-header/SearchHeader";
import Footer from "../../common/components/Footer";
import MainContent from "../../modules/movie-card-grid/Main-content-controls/MainContent";
import { AddMovieModal } from "../../modules/modals/AddMovie/AddMovieModal";
class HomePage extends Component {
  state = {
    activeMovie: null,
    isAddMovieShown: false,
  };

  handleShowMovie = (movie) => {
    this.setState({
      activeMovie: movie,
    });
  }

  handleShowAddMovieModal = (shouldShow) => {
    this.setState({
      isAddMovieShown: shouldShow,
    });
  }

  handleAddMovieSubmit = () => {
    alert("Not implemented yet!!!");
  }

  render() {
    return (
      <>
        <SearchHeader
          activeMovie={this.state.activeMovie}
          showAddMovieModal={this.handleShowAddMovieModal}
        />
        <MainContent handleShowMovie={this.handleShowMovie} />
        <Footer />
        {this.state.isAddMovieShown && (
          <AddMovieModal
            onSubmit={this.handleAddMovieSubmit}
            onCloseClick={this.handleShowAddMovieModal}
          />
        )}
      </>
    );
  }
}
export default HomePage;
