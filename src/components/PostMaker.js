import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import useStyles from "../Styles";

import {
  Container,
  Button,
  Typography,
  CssBaseline,
  TextField,
  Grid,
  Box,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

//------------------------------------------Main Function

const PostMaker = () => {
  const classes = useStyles();
  const { error, createPost } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });
  //----------------------------------------functions
  
//----------------------------------------return
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
            boxShadow: 0,
          }}
        >
          <Typography component="h1" variant="h5">
            Post.
          </Typography>
          {error && <div role="alert">{error}</div>}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(createPost)}
            sx={{ mt: 3 }}
          >
         
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-Title"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  autoFocus
                  {...register("title", { required: true })}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <TextField
                  autoComplete="given-Content"
                  name="content"
                  required
                  fullWidth
                  id="content"
                  label="Post Content"
                /> */}
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static"
                  name="content"
                  label="Post Content"
                  multiline
                  fullWidth
                  required
                  rows={4}
                  defaultValue="..."
                  {...register("content", { required: true })}
                />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              className={classes.button}
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
        <hr />
      </Container>
    </ThemeProvider>
  );
};

export default PostMaker;
