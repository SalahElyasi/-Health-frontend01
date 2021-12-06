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
  Checkbox,
  Link,
  Grid,
  Box,
} from "@mui/material";
import { Settings } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
//----------------------------------------functions

//------------------------------------------Main Function

const SettingProfile = () => {
  const { user } = useContext(AuthContext);

  const { error, update } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...user,
      phone: null,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="70%">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "info.main" }} variant="square">
            <Settings />
          </Avatar>
          <Typography component="h1" variant="h5">
            Settings
          </Typography>
          {error && <div role="alert">{error}</div>}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(update)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-phone"
                  name="phone"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  autoFocus
                  {...register("phone", { required: true })}
                />
                {errors.phone && <div role="alert">phone is not correct</div>}
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
        <hr />
      </Container>
    </ThemeProvider>
  );
};

export default SettingProfile;
