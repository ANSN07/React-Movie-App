import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MoviesContext } from "../../contexts/moviesContext";
import { Link } from "react-router-dom";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
    marginTop: "25px",
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const MovieHeader = (props) => {
  const movie = props.movie;
  const { favourites: movieIds } = useContext(MoviesContext);
  const filteredIds = movieIds.filter((m) => {
    return m === movie.id;
  });
  const isFavourite = filteredIds.length > 0 ? true : false;

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      {isFavourite ? (
        <Avatar sx={styles.avatar}>
          <FavoriteIcon />
        </Avatar>
      ) : null}
      <div>
        <Typography variant="h4" component="h3">
          <Link style={{ textDecoration: "none" }} to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
          {"   "}
          <a href={movie.homepage}>
            <HomeIcon color="primary" fontSize="='large" />
          </a>
        </Typography>
        <Typography variant="h6" component="h6">
          {`${movie.tagline}`}
        </Typography>
      </div>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
