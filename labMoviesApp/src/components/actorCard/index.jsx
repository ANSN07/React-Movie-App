import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";

const styles = {
  card: {
    width: 200,
    height: 300,
    marginRight: 3,
  },
  media: {
    objectFit: "contain",
    height: "90%",
    width: "100%",
    margin: "auto",
  },
};

export default function ActorCard({ actor }) {
  return (
    <Link style={{ textDecoration: "none" }} to={`/person/${actor.id}`}>
      <Card sx={styles.card}>
        <CardHeader
          sx={styles.header}
          title={
            <Typography variant="p" component="p">
              {actor.name}{" "}
            </Typography>
          }
        />
        <CardMedia
          sx={styles.media}
          component="img"
          image={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
              : img
          }
        />
      </Card>
    </Link>
  );
}
