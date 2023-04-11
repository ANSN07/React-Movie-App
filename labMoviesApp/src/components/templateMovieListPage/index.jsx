import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import MovieList from "../movieList";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
  gridItem: {
    marginTop: "25px",
  },
};

function MovieListPageTemplate({ movies, title, action }) {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12} sx={styles.gridItem}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <MovieList action={action} movies={movies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
