import React from "react";
import Actor from "../actorCard";
import Typography from "@mui/material/Typography";

const ActorList = ({ actors }) => {
  const data =
    actors.cast.length >= 10 ? actors.cast.slice(0, 10) : actors.cast;

  return (
    <>
      <Typography variant="h5" component="h3" sx={{ marginLeft: 2 }}>
        Cast & Crew
      </Typography>
      <div
        style={{
          width: "100%",
          overflow: "auto",
          display: "flex",
          height: "330px",
        }}
      >
        {data.map((actor) => (
          <div key={actor.credit_id}>
            <Actor key={actor.credit_id} actor={actor} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ActorList;
