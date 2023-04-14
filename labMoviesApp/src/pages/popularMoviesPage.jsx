import React from "react";
import { getPopularMovies } from "../api/tmdb-api";
import TemplateMovieCategoryPage from "../components/templateMovieCategory";
import AddToPlaylist from "../components/cardIcons/addToPlaylist";

const PopularMoviesPage = (props) => {
  return (
    <>
      <TemplateMovieCategoryPage
        title={"Most Popular Movies"}
        keyValue={"popular"}
        api={getPopularMovies}
        action={(movie) => {
          return <AddToPlaylist movie={movie} />;
        }}
      />
    </>
  );
};
export default PopularMoviesPage;
