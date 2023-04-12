import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieActorList } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import ActorList from "../components/actorList";

const MovieDetailsPage = () => {
  const { id } = useParams();

  const movie = useQuery(["movie", { id: id }], getMovie);
  const actorList = useQuery(["actors", { id: id }], getMovieActorList);

  if (movie.isLoading || actorList.isLoading) {
    return <Spinner />;
  }

  if (movie.isError || actorList.isError) return <h1>An error occurred!</h1>;

  return (
    <>
      {movie.data && actorList.data ? (
        <>
          <PageTemplate movie={movie.data}>
            <MovieDetails movie={movie.data} />
          </PageTemplate>
          <br />
          <ActorList actors={actorList.data} />
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
