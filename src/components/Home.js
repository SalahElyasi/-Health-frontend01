import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";
import Post from "./Post";
import Footer from "./footer/Footer";

//-----------------------MUI
import {
  styled,
  Box,
  Paper,
  Grid,
  CardMedia,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

import TherapistCard from "./TherapistCard";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h6" component="div">
        Selbsttest
      </Typography>
      <CardMedia
        component="img"
        height="auto"
        image="https://media.istockphoto.com/photos/hands-holding-brain-with-puzzle-paper-cutout-autism-epilepsy-and-picture-id1272508891?b=1&k=20&m=1272508891&s=170667a&w=0&h=JOG99bUYhWHyYsZJ2dQLYIFmfFzwCHAOBCWXGdEiWiY="
        alt="Paella dish"
      />
    </CardContent>
    <CardActions
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Button variant="contained" size="small">
        Test Starten
      </Button>
    </CardActions>
  </React.Fragment>
);
//---------------------------------------------------------------------------------Main Component Home
const Home = () => {
  // const classes = useStyles();
  const { reversedPosts, userInfo } = useContext(AuthContext);

  //----------------------------------------------------------functions
  // const viewFunction = (id) => {

  // };

  return (
    <div>
      <Navbar />
      {/* <SearchBar /> */}
      {/* className={classes.caption} */}
      <Box sx={{ flexGrow: 1, padding: "10px" }}>
        <Grid container spacing={0} rowSpacing={1}>
          {/* //---------------------------------------------Left Side */}
          <Grid item xs={0} sm={2} md={2}>
            <Item sx={{ height: "97%", boxShadow: 0 }}></Item>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Item sx={{ boxShadow: 0 }}>
              <Typography variant="h6" component="div">
                Psychologische Beratung & Onlinetherapie für alle
              </Typography>
            </Item>
            {/* //----------------------------------------------------------Post */}

            {/* <ScrollBar /> */}
            {/* <VerticalTabs /> */}
            {/* <FixedScrollBar /> */}

            {reversedPosts &&
              reversedPosts.map((p, index) => (
                <Item
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center",
                    boxShadow: 0,
                    width: "100%",
                  }}
                >
                  <Post
                    key={p._id}
                    title={p.title}
                    content={p.content}
                    postedBy={p.postedBy}
                    likes={p.likes}
                    id={p._id}
                    comments={p.comments}
                    createdAt={p.createdAt}
                  />
                </Item>
              ))}

            {/* //----------------------------------------------------------TherapistCard */}
            <Item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 0,
              }}
            >
              {userInfo &&
                userInfo
                  .filter((user) => user.account_type !== "user")
                  .map((user, index) => (
                    <Card key={index} sx={{ width: "100%" }}>
                      <TherapistCard user={user} />
                    </Card>
                  ))}
            </Item>
            <Item sx={{ display: "inline-flex", boxShadow: 0 }}>
              <Card sx={{ width: "100%" }}>{card}</Card>
              <Card sx={{ width: "100%" }}>{card}</Card>
              <Card sx={{ width: "100%" }}>{card}</Card>
            </Item>
          </Grid>
          {/* //---------------------------------------------Right Side */}
          <Grid item xs={0} sm={2} md={2}>
            <Item sx={{ height: "97%", boxShadow: 0 }}></Item>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </div>
  );
};

export default Home;
