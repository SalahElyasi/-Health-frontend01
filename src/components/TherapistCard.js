import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

//-----------------------MUI
import {
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
//---------------------------------------------------------------------------------Main Component TherapistCard

const TherapistCard = ({ user }) => {
  const { setUserView } = useContext(AuthContext);
  //----------------------------------------------------------functions
  const viewFunction = (id) => {
    setUserView(user);
  };
  return (
    <React.Fragment>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          height: "500px",
        }}
      >
        <CardMedia
          component="img"
          height="auto"
          image={user.image} //"https://cdn.pixabay.com/photo/2015/03/08/09/30/head-663997__340.jpg"
          alt="Paella dish"
        />
        <Typography variant="h6" color="textPrimary" textAlign="center">
          {user.name}
        </Typography>
        <Typography variant="caption" color="text.secondary" textAlign="left">
          expertise
        </Typography>
        <Typography variant="caption" color="text.secondary" textAlign="left">
          {user.city}
        </Typography>
        <Typography variant="caption" color="text.secondary" textAlign="left">
          {user.languages}
        </Typography>
        <Typography variant="caption" color="text.secondary" textAlign="left">
          {user.experience} Jahre Erfahrung
        </Typography>
        <Typography variant="caption" color="text.secondary" textAlign="left">
          {user.price},00 (inkl. MwSt.) /Stunde
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Button
          onClick={viewFunction}
          component={Link}
          to="/UserViewProfile"
          variant="contained"
          size="small"
        >
          Details & Buchung
        </Button>
      </CardActions>
    </React.Fragment>
  );
};

export default TherapistCard;
