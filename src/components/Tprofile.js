import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { StateContext } from "../context/Context";
import Navbar from "./Navbar";
import Footer from "./footer/Footer";
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

export default function Tprofile() {
  const authcontext = useContext(AuthContext);
  console.log(authcontext);
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState(new Date()); //for Date

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1, padding: "10px" }}>
        <Grid container spacing={2} rowSpacing={1}>
          <Grid item xs={0} sm={0} md={1}></Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item sx={{ boxShadow: 0 }}>
              <Card sx={{ maxWidth: "100%" }}>
                <Typography
                  variant="h4"
                  color="textPrimary"
                  textAlign="center"
                ></Typography>
                <CardMedia
                  component="img"
                  height="194"
                  image="https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_1280.jpg"
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
                    Ort
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    English , Deutsch
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    3 Jahre Erfahrung
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    70,00 (inkl. MwSt.) /Stunde
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
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
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep
                      skillet over medium-high heat. Add chicken, shrimp and
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with ar
                      minutes more. (Discard any mussels that don’t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
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
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with ar minutes
                more. (Discard any mussels that don’t open.) is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={5}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={12} md={7}>
            <Item>
              <Image />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
