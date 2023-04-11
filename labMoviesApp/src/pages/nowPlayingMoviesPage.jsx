import React from "react";
import { getNowPlayingMovies } from "../api/tmdb-api";
import TemplateMovieCategoryPage from "../components/templateMovieCategory";
import AddToPlaylist from "../components/cardIcons/addToPlaylist";

const NowPlayingMoviesPage = (props) => {
  return (
    <>
      <TemplateMovieCategoryPage
        title={"Now Playing Movies"}
        keyValue={"now-playing"}
        api={getNowPlayingMovies}
        action={(movie) => {
          return <AddToPlaylist movie={movie} />;
        }}
      />
    </>
  );
};
export default NowPlayingMoviesPage;
