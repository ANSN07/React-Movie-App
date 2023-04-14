import { useAuth } from "../contexts/AuthContext";
import Card from "@mui/material/Card";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, CardContent, Stack } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import styles from "../components/reviewForm/styles";
import Snackbar from "@mui/material/Snackbar";

const LoginPage = () => {
  const defaultValues = {
    email: "",
    password: "",
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm(defaultValues);
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSnackClose = () => {
    setOpen(false);
  };

  const onSubmit = async (values) => {
    try {
      setErrorMsg("");
      const {
        data: { user, session },
        error,
      } = await login(values.email, values.password);
      if (error) {
        setErrorMsg(error.message);
        setOpen(true);
      }
      if (user && session) navigate("/");
    } catch (error) {
      setErrorMsg("Incorrect Email or Password");
      setOpen(true);
    }
  };

  return (
    <>
      <Card style={{ marginTop: 15 }}>
        <CardContent>
          <Box component="div" sx={styles.root}>
            <Typography component="h4" variant="h5">
              Login
            </Typography>
            <Snackbar
              sx={styles.snack}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              open={open}
              onClose={handleSnackClose}
            >
              <Alert
                severity="error"
                variant="filled"
                onClose={handleSnackClose}
              >
                {errorMsg ? (
                  <Typography variant="h4">{errorMsg}</Typography>
                ) : null}
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
                  name="email"
                  control={control}
                  rules={{ required: "Please enter email" }}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      sx={{ width: "40ch" }}
                      variant="outlined"
                      margin="normal"
                      required
                      onChange={onChange}
                      value={value}
                      id="email"
                      label="Email"
                      autoFocus
                    />
                  )}
                />
                {errors.email && (
                  <Typography variant="p" component="p" color="error">
                    {errors.email.message}
                  </Typography>
                )}
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "Please enter password"
                  }}
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      sx={{ width: "40ch" }}
                      value={value}
                      onChange={onChange}
                      label="Password"
                      id="password"
                    />
                  )}
                />
                {errors.password && (
                  <Typography variant="p" component="p" color="error">
                    {errors.password.message}
                  </Typography>
                )}
              </Stack>
              <Box sx={styles.buttons}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "rgb(3, 37, 65)" }}
                >
                  Login
                </Button>
              </Box>
            </form>
          </Box>
          <div style={{ marginTop: 15 }}>
            New User? <Link to={"/register"}>Register</Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default LoginPage;
