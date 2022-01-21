import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { StateContext } from "../context/Context";
import Navbar from "./Navbar";
import Footer from "./footer/Footer";
import Post from "./Post";
import ProtectedRoute from "./ProtectedRoute";
import Youtube from "./Youtube";
import Tcontact from "./Tcontact";
import useStyles from "../Styles";

import Image from "./Image";
import {
  styled,
  Box,
  Paper,
  Grid,
  Card,
  TextField,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Rating,
  Stack,
} from "@mui/material";
//-------------------date
import isWeekend from "date-fns/isWeekend";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { LocalizationProvider, StaticDatePicker } from "@mui/lab";
//-------------------------------grid
import { red } from "@mui/material/colors";
import { Favorite, Share, ExpandMore } from "@mui/icons-material";

const ExpandMoreStyle = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
//-----------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));
//-----------------------------------------MAIN function

export default function UserViewProfile() {
  const classes = useStyles();
  const { posts, userView } = useContext(AuthContext);

  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState(new Date()); //for Date

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <ProtectedRoute>
        <Navbar />
      </ProtectedRoute>
      {userView && (
        <Box className={classes.box}>
          <Grid container spacing={2} rowSpacing={1}>
            <Grid item xs={0} sm={0} md={1}></Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item sx={{ boxShadow: 0 }}>
                <Card sx={{ maxWidth: "100%" }}>
                  <Typography
                    variant="h4"
                    color="textPrimary"
                    textAlign="center"
                  >
                    {userView.name}
                  </Typography>
                  <CardMedia
                    component="img"
                    image={userView.image} //"https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_1280.jpg"
                    alt="Paella dish"
                  />
                  <CardContent>
                    <CardActions
                      disableSpacing
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <IconButton aria-label="add to favorites">
                        <Favorite />
                      </IconButton>
                      <IconButton aria-label="share">
                        <Share />
                      </IconButton>
                    </CardActions>
                    <Typography variant="h6" color="text.secondary">
                      Expertise
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {userView.city}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {userView.languages}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {userView.experience} Jahre Erfahrung
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {userView.price} (inkl. MwSt.) /Stunde
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {userView.motto}
                    </Typography>
                  </CardContent>
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{ bgcolor: red[500] }}
                        aria-label="recipe"
                        src="https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729514_1280.jpg"
                      ></Avatar>
                    }
                    title="Name"
                    subheader="Anna Mustermann"
                  />

                  <CardActions disableSpacing>
                    <Typography variant="h6" color="text.secondary">
                      Bewertungen
                    </Typography>

                    <Stack spacing={1}>
                      <Rating name="read-only" value={value} readOnly />
                    </Stack>
                    <ExpandMoreStyle
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMore />
                    </ExpandMoreStyle>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi, sequi.
                      </Typography>
                      <Typography paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis unde facere sunt temporibus, sit id.
                      </Typography>
                      <Typography paragraph>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sunt voluptatibus officiis esse sapiente ad illum!
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={12} sm={5} md={7}>
              <Item>
                <Typography variant="h4" color="textPrimary" textAlign="left">
                  Calender
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={value}
                    shouldDisableDate={isWeekend}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Item>
              <br />
              <Item>
                <Typography variant="h4" color="textPrimary" textAlign="left">
                  Über mich
                </Typography>
                <Typography paragraph>{userView.bio}</Typography>

                <Item
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    flexWrap: "wrap",
                    boxShadow: 0,
                  }}
                >
                  <Item sx={{ boxShadow: 0, ml: 1 }}>
                    <Youtube videoId="S_AI8smFpyA" />
                  </Item>
                  <Item sx={{ boxShadow: 0, ml: 1 }}>
                    <Youtube videoId="hQc0B4Gwmhg" />
                  </Item>
                  <Item sx={{ boxShadow: 0, ml: 1 }}>
                    <Youtube videoId="S_AI8smFpyA" />
                  </Item>
                  <Item sx={{ boxShadow: 0, ml: 1 }}>
                    <Youtube videoId="hQc0B4Gwmhg" />
                  </Item>
                  <Item sx={{ boxShadow: 0, ml: 1 }}>
                    <Youtube videoId="S_AI8smFpyA" />
                  </Item>
                  <Item sx={{ boxShadow: 0, ml: 1 }}>
                    <Youtube videoId="hQc0B4Gwmhg" />
                  </Item>
                </Item>
              </Item>
            </Grid>
            <Grid item xs={12} md={5}>
              <Item sx={{ boxShadow: 0 }}>
                {posts && (
                  <Post
                    title={posts[posts.length - 1].title}
                    content={posts[posts.length - 1].content}
                  />
                )}
              </Item>
              <Item sx={{ boxShadow: 0 }}>
                {/* //-------------------------------Tcontact Component */}

                <Tcontact />
              </Item>
            </Grid>
            <Grid item xs={12} md={7}>
              <Item sx={{ boxShadow: 0 }}>
                {/* //-------------------------------Image Component */}
                <Image />
              </Item>
            </Grid>
          </Grid>
        </Box>
      )}
      <Footer />
    </>
  );
}
