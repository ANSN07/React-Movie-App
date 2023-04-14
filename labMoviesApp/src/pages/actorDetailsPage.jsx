import React from "react";
import { useParams } from "react-router-dom";
import {
  getActorDetails,
  getActorExternalIds,
  getActorImages,
} from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import ActorDetails from "../components/actorDetails";

const ActorDetailsPage = () => {
  const { id } = useParams();

  const person = useQuery(["person", { id: id }], getActorDetails);
  const images = useQuery(["actor_images", { id: id }], getActorImages);
  const externalIds = useQuery(
    ["actor_externalIDs", { id: id }],
    getActorExternalIds
  );

  if (images.isLoading || externalIds.isLoading || person.isLoading) {
    return <Spinner />;
  }
  if (images.isError || externalIds.isError || person.isError)
    return <h1>An error occurred!</h1>;

  return (
    <>
      {person && images && externalIds ? (
        <div key={person.id}>
          <ActorDetails
            actor={person.data}
            images={images.data}
            externalIds={externalIds.data}
          />
        </div>
      ) : (
        <p>Loading Data...</p>
      )}
    </>
  );
};

export default ActorDetailsPage;
