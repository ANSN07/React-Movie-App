import React from "react";
import { getMovies } from "../api/tmdb-api";
import TemplateMovieCategoryPage from "../components/templateMovieCategory";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const HomePage = (props) => {
  return (
    <>
      <TemplateMovieCategoryPage
        title="Discover Movies"
        keyValue={"discover"}
        api={getMovies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />;
        }}
      />
    </>
  );
};
export default HomePage;
