import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import TemplateMovieCategoryPage from "../components/templateMovieCategory";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const UpcomingMoviesPage = (props) => {
  return (
    <>
      <TemplateMovieCategoryPage
        title="Upcoming Movies"
        keyValue={"upcoming"}
        api={getUpcomingMovies}
        action={(movie) => {
          return <AddToPlaylistIcon movie={movie} />;
        }}
      />
    </>
  );
};
export default UpcomingMoviesPage;
