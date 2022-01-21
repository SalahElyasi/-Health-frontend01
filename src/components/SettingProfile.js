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
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { Settings } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
//----------------------------------------functions

//------------------------------------------Main Function

const SettingProfile = () => {
  const { user, error, update } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...user,
      name: `${user.name}`,
      email: `${user.email}`,
      phone: `${user.phone}`,
      age: `${user.age}`,
      city: `${user.city}`,
      languages: `${user.languages}`,
      price: `${user.price}`,
      experience: `${user.experience}`,
      motto: `${user.motto}`,
      bio: `${user.bio}`,
      gender: `${user.gender}`,
      image: `${user.image}`,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="90%">
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
              <Grid item xs={12} sm={6} md={4}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  defaultValue={user.gender ? user.gender : null}
                  name="gender"
                >
                  <FormControlLabel
                    value="female"
                    name="female"
                    control={<Radio />}
                    label="Female"
                    {...register("gender", { required: false })}
                  />
                  <FormControlLabel
                    value="male"
                    name="male"
                    control={<Radio />}
                    label="Male"
                    {...register("gender", { required: false })}
                  />
                  <FormControlLabel
                    value="other"
                    name="other"
                    control={<Radio />}
                    label="Other"
                    {...register("gender", { required: false })}
                  />
                </RadioGroup>
                {errors.gender && <div role="alert">Gender is not correct</div>}
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  fullWidth
                  id="name"
                  label="Name"
                  helperText={user.name ? user.name : ""}
                  {...register("name", { required: false })}
                />
                {errors.name && <div role="alert">name is not correct</div>}
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  autoComplete="given-email"
                  name="email"
                  fullWidth
                  id="email"
                  label="Email"
                  helperText={user.email ? user.email : ""}
                  {...register("email", { required: false })}
                />
                {errors.email && <div role="alert">email is not correct</div>}
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  autoComplete="given-phone"
                  name="phone"
                  fullWidth
                  id="phone"
                  label={user ? "New Phone Number" : "Phone Number"}
                  defaultValue={user.phone ? user.phone : 0}
                  helperText={user.phone ? user.phone : ""}
                  {...register("phone", { required: false })}
                />
                {errors.phone && <div role="alert">phone is not correct</div>}
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  autoComplete="given-age"
                  name="age"
                  fullWidth
                  id="age"
                  label={user.age ? "New Age" : "Age"}
                  defaultValue={user.age ? user.age : 0}
                  helperText={user.age ? user.age : ""}
                  {...register("age", { required: false })}
                />
                {errors.age && <div role="alert">age is not correct</div>}
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  autoComplete="given-city"
                  name="city"
                  fullWidth
                  id="city"
                  label={user.city ? "New City" : "City"}
                  defaultValue={user.city ? user.city : ""}
                  helperText={user.city ? user.city : ""}
                  {...register("city", { required: false })}
                />
                {errors.city && <div role="alert">City is not correct</div>}
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  autoComplete="given-languages"
                  name="languages"
                  fullWidth
                  id="languages"
                  label={user.languages ? "New languages" : "Languages"}
                  defaultValue={user.languages ? user.languages : ""}
                  helperText={user.languages ? user.languages : ""}
                  {...register("languages", { required: false })}
                />
                {errors.languages && (
                  <div role="alert">Languages is not correct</div>
                )}
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  autoComplete="given-price"
                  name="price"
                  fullWidth
                  id="price"
                  label={user.price ? "New price" : "Price"}
                  defaultValue={user.price ? user.price : 0}
                  helperText={user.price ? user.price : ""}
                  {...register("price", { required: false })}
                />

                {errors.price && <div role="alert">Price is not correct</div>}
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  autoComplete="given-experience"
                  name="experience"
                  fullWidth
                  id="experience"
                  label={user.experience ? "New experience" : "Experience"}
                  defaultValue={
                    user.experience ? user.experience : "Experience"
                  }
                  helperText={user.experience ? user.experience : ""}
                  {...register("experience", { required: false })}
                />
                {errors.experience && (
                  <div role="alert">Experience is not correct</div>
                )}
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  autoComplete="given-bio"
                  name="bio"
                  fullWidth
                  multiline
                  rows={4}
                  id="bio"
                  label={user.bio ? "New bio" : "Biography"}
                  defaultValue={user.bio ? user.bio : ""}
                  helperText={user.bio ? user.bio : ""}
                  {...register("bio", { required: false })}
                />
                {errors.bio && <div role="alert">Biography is not correct</div>}
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  autoComplete="given-motto"
                  name="motto"
                  fullWidth
                  id="motto"
                  label={user.motto ? "New motto" : "Motto"}
                  defaultValue={user.motto ? user.motto : ""}
                  helperText={user.motto ? user.motto : ""}
                  {...register("motto", { required: false })}
                />
                {errors.motto && <div role="alert">Motto is not correct</div>}
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  autoComplete="given-image"
                  name="image"
                  maxWidth="150px"
                  id="image"
                  label={user.image ? "New image" : "Image"}
                  defaultValue={user.image ? user.image : ""}
                  helperText={user.image ? user.image : ""}
                  {...register("image", { required: false })}
                  //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0uIfnetRDeY5kenC0C-dYmyj12rgsN8imnQ&usqp=CAU
                  //https://cdn.pixabay.com/photo/2017/03/02/20/25/woman-2112292__480.jpg
                />
                {errors.image && <div role="alert">Image is not correct</div>}
              </Grid>

              <Grid item xs={12} sm={6} md={4}></Grid>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              item
              xs={12}
              sm={12}
              md={12}
            >
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Save
              </Button>
            </Grid>
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
