import FullCastList from "../components/fullCastList";
import MovieHeader from "../components/headerMovie";
import { useParams } from "react-router-dom";
import Spinner from "../components/spinner";
import { useQuery } from "react-query";
import { getMovie, getMovieActorList } from "../api/tmdb-api";
import React from "react";

const FullCastAndCrewPage = () => {
  const { id } = useParams();

  const movie = useQuery(["movie", { id: id }], getMovie);
  const actorList = useQuery(["actors", { id: id }], getMovieActorList);

  if (movie.isLoading || actorList.isLoading) {
    return <Spinner />;
  }

  if (movie.isError || actorList.isError) return <h1>An error occurred!</h1>;

  const { cast, crew } = actorList.data;

  return (
    <>
      {movie.data && actorList.data ? (
        <>
          <MovieHeader movie={movie.data} />
          <FullCastList actors={cast} title={"Cast"} />
          <FullCastList actors={crew} title={"Crew"} />
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default FullCastAndCrewPage;
