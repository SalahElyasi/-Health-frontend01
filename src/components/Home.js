import React from "react";
import Appbar from "./Appbar";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import Tprofile from "./Tprofile";
import Post from "./Post";
import Footer from "./footer/Footer";
import SearchBar from "./SearchBar";
import useStyles from "../Styles";

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

const TherapistCard = (
  <React.Fragment>
    <CardContent
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="auto"
        image="https://cdn.pixabay.com/photo/2015/03/08/09/30/head-663997__340.jpg"
        alt="Paella dish"
      />
      <Typography variant="h6" color="textPrimary" textAlign="center">
        Name
      </Typography>
      <Typography variant="caption" color="text.secondary" textAlign="left">
        Expertise
      </Typography>
      <Typography variant="caption" color="text.secondary" textAlign="left">
        Ort
      </Typography>
      <Typography variant="caption" color="text.secondary" textAlign="left">
        English , Deutsch
      </Typography>
      <Typography variant="caption" color="text.secondary" textAlign="left">
        3 Jahre Erfahrung
      </Typography>
      <Typography variant="caption" color="text.secondary" textAlign="left">
        70,00 (inkl. MwSt.) /Stunde
      </Typography>
    </CardContent>
    <CardActions
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Button variant="contained" size="small">
        Details & Buchung
      </Button>
    </CardActions>
  </React.Fragment>
);

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      {/* <SearchBar /> */}
      {/* className={classes.caption} */}
      <Box sx={{ flexGrow: 1, padding: "10px" }}>
        <Grid container spacing={0} rowSpacing={1}>
          {/* //---------------------------------------------Left Side */}
          <Grid item xs={0} sm={2} md={2}>
            <Item sx={{ height: "97%" }}></Item>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Item sx={{ boxShadow: 0 }}>
              <Typography variant="h6" component="div">
                Psychologische Beratung & Onlinetherapie für alle
              </Typography>
            </Item>
            {/* //----------------------------------------------------------Post */}
            <Item
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: 0,
                width: "100%",
              }}
            >
              <Post />
            </Item>
            {/* //----------------------------------------------------------TherapistCard */}
            <Item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 0,
              }}
            >
              <Card sx={{ width: "100%" }}>{TherapistCard}</Card>
              <Card sx={{ width: "100%" }}>{TherapistCard}</Card>
              <Card sx={{ width: "100%" }}>{TherapistCard}</Card>
              <Card sx={{ width: "100%" }}>{TherapistCard}</Card>
            </Item>
            <Item sx={{ display: "inline-flex", boxShadow: 0 }}>
              <Card sx={{ width: "100%" }}>{card}</Card>
              <Card sx={{ width: "100%" }}>{card}</Card>
              <Card sx={{ width: "100%" }}>{card}</Card>
            </Item>
          </Grid>
          {/* //---------------------------------------------Right Side */}
          <Grid item xs={0} sm={2} md={2}>
            <Item sx={{ height: "97%" }}></Item>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </div>
  );
};

export default Home;
