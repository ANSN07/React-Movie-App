import Card from "@mui/material/Card";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase/index";
import { Alert, Button, CardContent, Stack } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller } from "react-hook-form";
import styles from "../components/reviewForm/styles";
import Snackbar from "@mui/material/Snackbar";

const RegisterUser = () => {
  const defaultValues = {
    email: "",
    password: "",
    confirm_password: "",
  };
  const {
    control,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm(defaultValues);
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSnackClose = (event) => {
    setOpen(false);
    navigate("/");
  };

  const onSubmit = async (values) => {
    try {
      setErrorMsg("");
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });
      if (!error && data) {
        setOpen(true);
      }
    } catch (error) {
      setErrorMsg("Error in Account Creation");
      setOpen(true);
    }
  };

  return (
    <>
      <Card style={{ marginTop: 15 }}>
        <CardContent>
          <Box component="div" sx={styles.root}>
            <Typography component="h4" variant="h5">
              Sign Up
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
                {errorMsg ? (
                  <Typography variant="h4">{errorMsg}</Typography>
                ) : (
                  <Typography variant="h4">
                    Account created successfully, please verify your email.
                  </Typography>
                )}
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
                  rules={{ required: "Email is required." }}
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
                    required: "Password cannot be empty.",
                    minLength: {
                      value: 6,
                      message: "Password must be atleast 6 characters long.",
                    },
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
                <Controller
                  name="confirm_password"
                  control={control}
                  rules={{
                    required: "Please confirm your password",
                    validate: (value) => {
                      if (watch("password") != value) {
                        return "Password mismatch";
                      }
                    },
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
                      label="Confirm password"
                      id="confirm_password"
                    />
                  )}
                />
                {errors.confirm_password && (
                  <Typography variant="p" component="p" color="error">
                    {errors.confirm_password.message}
                  </Typography>
                )}
              </Stack>
              <Box sx={styles.buttons}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "rgb(3, 37, 65)" }}
                >
                  Register
                </Button>
              </Box>
            </form>
          </Box>
          <div style={{ marginTop: 15 }}>
            Already a User? <Link to={"/login"}>Login</Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default RegisterUser;
