import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

import {
  Avatar,
  Container,
  Button,
  Typography,
  CssBaseline,
  TextField,
  FormControlLabel,
  Link,
  Grid,
  Box,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Error from "./alerts/Error";
const theme = createTheme();
//----------------------------------------functions

//------------------------------------------Main Function
export default function Signup() {
  const { isAuthenticated, loading, signUp, error, user, setOpen } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      last_name: "",
      email: "",
      password: "",
      account_type: "user",
      // user: `${
      //   user.account_type == "user"
      //     ? (user.therapeut = false)
      //     : (user.user = true)
      // }`,
      // therapeut: `${
      //   user.account_type == "therapeut"
      //     ? (user.user = false)
      //     : (user.therapeut = true)
      // }`,
    },
  });

  if (loading) return <div>Loading....</div>;
  // if (isAuthenticated) return <Navigate to="/therapeutprofile" />;
  if (user.account_type === "user") return <Navigate to="/userprofile" />;
  if (user.account_type === "therapeut")
    return <Navigate to="/therapeutprofile" />;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {error && (
            <div style={{ color: "red" }} role="alert">
              {error}
            </div>
          )}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(signUp)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={8}>
                <FormLabel component="legend" required>
                  Register as
                </FormLabel>
                <RadioGroup row aria-label="account_type" name="account_type">
                  <FormControlLabel
                    value="user"
                    name="user"
                    control={<Radio />}
                    label="user"
                    {...register("account_type", { required: false })}
                  />
                  <FormControlLabel
                    value="therapeut"
                    name="therapeut"
                    control={<Radio />}
                    label="therapeut"
                    {...register("account_type", { required: false })}
                  />
                </RadioGroup>
                {errors.account_type && (
                  <div role="alert">account_type is not correct</div>
                )}
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="First Name"
                  autoFocus
                  {...register("name", { required: true })}
                />
                {errors.name && <div role="alert">Name is required</div>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  autoComplete="last_name"
                  {...register("last_name", { required: true })}
                />
                {errors.last_name && (
                  <div role="alert">Last Name is required</div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <div role="alert">Email is required</div>}
                {error && <Error />}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <div role="alert">Password is required</div>
                )}
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
