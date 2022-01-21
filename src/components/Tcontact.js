import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import emailjs from "emailjs-com";

import {
  Avatar,
  Container,
  Button,
  Typography,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
//----------------------------------------functions

//------------------------------------------Main Function

const Tcontact = () => {
  const {
    user: { email },
  } = useContext(AuthContext);

  const { error, update } = useContext(AuthContext);

  // const {
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     phone: null,
  //     _id,
  //   },
  // });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mlug3f8",
        "template_uzscwc9",
        e.target,
        "user_MP46fmmc8nkt2ZtekFGPv"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="100%">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            boxShadow: 0,
          }}
        >
          <Typography component="h1" variant="h5">
            Contact Me.
          </Typography>
          {error && <div role="alert">{error}</div>}
          <Box component="form" noValidate onSubmit={sendEmail} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-therapeut_email"
                  name="therapeut_email"
                  fullWidth
                  id="therapeut_email"
                  label="To"
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-Name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-Phone"
                  name="phone"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="given-Email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-Message"
                  id="outlined-multiline-static"
                  label="Message"
                  name="message"
                  multiline
                  fullWidth
                  required
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Tcontact;
