import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState({});
  const [favourites, setFavourites] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [myMovies, setMyMovies] = useState([]);

  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
  };

  const addToPlaylist = (movie) => {
    let updatedPlaylist = [...playlist];
    if (!playlist.includes(movie.id)) {
      updatedPlaylist.push(movie.id);
    }
    setPlaylist(updatedPlaylist);
  };

  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  const addFantasyMovie = (movie) => {
    let movieObj = { title: movie.title, overview: movie.overview };
    let updatedMovies = [...myMovies];
    updatedMovies.push(movieObj);
    setMyMovies(updatedMovies);
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToPlaylist,
        myMovies,
        addFantasyMovie,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
