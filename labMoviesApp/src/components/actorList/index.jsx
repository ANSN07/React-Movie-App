import React from "react";
import Actor from "../actorCard";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";

const ActorList = ({ actors, movieId }) => {
  const data =
    actors.cast.length >= 10 ? actors.cast.slice(0, 10) : actors.cast;

  return (
    <>
      <Typography variant="h5" component="h3" sx={{ marginLeft: 2 }}>
        Cast & Crew
        <Link to={`/movies/${movieId}/actors`}>
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "none",
              marginLeft: 2,
              backgroundColor: "rgb(3, 37, 65)",
            }}
          >
            See More
            <KeyboardDoubleArrowRightIcon
              sx={{ color: "#bfbfbf" }}
              fontSize="small"
            />
          </Button>
        </Link>
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
