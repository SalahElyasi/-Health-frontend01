import React from "react";
import Appbar from "./Appbar";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import Tprofile from "./Tprofile";
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
        image="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-grey-photo-placeholder-illustrations-vectors-default-avatar-profile-icon-grey-photo-placeholder-99724602.jpg"
        alt="Paella dish"
      />
      <Typography variant="h6" color="textPrimary" textAlign="center">
        Name
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Expertise
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Ort
      </Typography>
      <Typography variant="caption" color="text.secondary">
        English , Deutsch
      </Typography>
      <Typography variant="caption" color="text.secondary">
        3 Jahre Erfahrung
      </Typography>
      <Typography variant="caption" color="text.secondary">
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
  return (
    <div>
      <Navbar />

      <Box sx={{ flexGrow: 1, padding: "10px" }}>
        <Grid container spacing={0} rowSpacing={1}>
          <Grid item xs={0} sm={2} md={3}>
            <Item sx={{ height: "97%" }}>xs=6 md=8</Item>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Item sx={{ boxShadow: 0 }}>
              <Typography variant="h6" component="div">
                Psychologische Beratung & Onlinetherapie für alle
              </Typography>
            </Item>
            <Item sx={{ display: "inline-flex", boxShadow: 0 }}>
              <Card sx={{ width: "100%" }}>{TherapistCard}</Card>
              <Card sx={{ width: "100%" }}>{TherapistCard}</Card>
            </Item>
            <Item sx={{ display: "inline-flex", boxShadow: 0 }}>
              <Card sx={{ width: "100%" }}>{card}</Card>
              <Card sx={{ width: "100%" }}>{card}</Card>
              <Card sx={{ width: "100%" }}>{card}</Card>
            </Item>
          </Grid>
          <Grid item xs={0} sm={2} md={3}>
            <Item sx={{ height: "97%" }}>xs=6 md=4</Item>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </div>
  );
};

export default Home;
