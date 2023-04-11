import React from "react";
import { getTopRatedMovies } from "../api/tmdb-api";
import TemplateMovieCategoryPage from "../components/templateMovieCategory";
import AddToPlaylist from "../components/cardIcons/addToPlaylist";

const TopRatedMoviesPage = (props) => {
  return (
    <>
      <TemplateMovieCategoryPage
        title={"Top Rated Movies"}
        keyValue={"top-rated"}
        api={getTopRatedMovies}
        action={(movie) => {
          return <AddToPlaylist movie={movie} />;
        }}
      />
    </>
  );
};
export default TopRatedMoviesPage;
