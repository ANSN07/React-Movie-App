import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import { Alert, Button, CardContent, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import { useForm, Controller } from "react-hook-form";
import styles from "../reviewForm/styles";
import Snackbar from "@mui/material/Snackbar";
import { MoviesContext } from "../../contexts/moviesContext";

export default function AddFantasyMovieForm() {
  const defaultValues = {
    title: "",
    overview: "",
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm(defaultValues);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const context = useContext(MoviesContext);

  const handleSnackClose = (event) => {
    setOpen(false);
    navigate("/myMovies");
  };

  const onSubmit = async (movie, e) => {
    e.preventDefault();
    context.addFantasyMovie(movie);
    setOpen(true);
  };

  return (
    <>
      <Card style={{ marginTop: 15 }}>
        <CardContent>
          <Box component="div" sx={styles.root}>
            <Typography component="h4" variant="h5">
              Create Movie
            </Typography>
            <Snackbar
              sx={styles.snack}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              open={open}
              onClose={handleSnackClose}
            >
              <Alert
                severity="success"
                variant="filled"
                onClose={handleSnackClose}
              >
                <Typography variant="h4">Movie created</Typography>
              </Alert>
            </Snackbar>
            <form
              sx={styles.form}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              autoComplete="off"
            >
              <Stack direction={"column"}>
                <Controller
                  name="title"
                  control={control}
                  rules={{ required: "Title is required." }}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      sx={{ width: "40ch" }}
                      variant="outlined"
                      margin="normal"
                      required
                      onChange={onChange}
                      value={value}
                      id="title"
                      label="Movie title"
                      autoFocus
                    />
                  )}
                />
                {errors.title && (
                  <Typography variant="p" component="p" color="error">
                    {errors.title.message}
                  </Typography>
                )}
                <Controller
                  name="overview"
                  control={control}
                  rules={{
                    required: "This field cannot be empty.",
                  }}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      value={value}
                      onChange={onChange}
                      label="Movie overview"
                      id="overview"
                      multiline
                      minRows={10}
                    />
                  )}
                />
                {errors.overview && (
                  <Typography variant="p" component="p" color="error">
                    {errors.overview.message}
                  </Typography>
                )}
              </Stack>
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "rgb(3, 37, 65)", marginRight: 2 }}
                >
                  Create
                </Button>
                <Button
                  type="reset"
                  variant="contained"
                  color="secondary"
                  sx={styles.submit}
                  onClick={() => {
                    reset({
                      title: "",
                      overview: "",
                    });
                  }}
                >
                  Reset
                </Button>
              </Box>
            </form>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
