import React from "react";
import styled from "styled-components";
import backGroundImage from "../../../images/header-blured-dark.jpg";
import NetflixLabel from "./NetflixLabel";
import AddMovieButton from "./AddMovieButton";
import SearchControls from "./searchControls";

const Header = styled.header`
  background-image: url(${backGroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  content: center;
  min-height: 200px;
  padding: 15px 25px 25px 55px;
`;

const FirstRow = styled.div`
  width: 100vw;
  width: 100%;
`;
const PositionLeft = styled.div`
  float: left;
`;

const PositionRight = styled.div`
  float: right;
`;

const FindMovieParagraph = styled.p`
  font-size: 35px;
  clear: right;
  padding-left: 55px;
  margin-top: 84px;
  font-family: inherit;
`;

const SearchBarRow = styled.div`
  min-height: 50px;
  margin-top: 45px;
  padding-left: 55px;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
`;

const SearchHeader = () => (
  <Header>
    <FirstRow>
      <PositionLeft>
        <NetflixLabel />
      </PositionLeft>
      <PositionRight>
        <AddMovieButton />
      </PositionRight>
    </FirstRow>
    <FindMovieParagraph>FIND YOUR MOVIE</FindMovieParagraph>
    <SearchBarRow>
      <SearchControls />
    </SearchBarRow>
  </Header>
);

export default SearchHeader;
