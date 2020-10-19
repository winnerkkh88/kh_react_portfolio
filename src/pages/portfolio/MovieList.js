import React from "react";
import { createGlobalStyle } from "styled-components";
import MovieListContainer from "../../containers/portfolio/movieList/MovieListContainer";

function MovieList() {
    const GlobalBackgroundStyle = createGlobalStyle`
    body {
      background: #e9ecef;
    }
  `;
    return (
        <>
            <GlobalBackgroundStyle />
            <MovieListContainer />
        </>
    );
}

export default MovieList;
