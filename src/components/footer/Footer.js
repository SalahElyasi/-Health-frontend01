import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const preventDefault = (event) => event.preventDefault();

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding: "10px", bgcolor: "#ADD8E6" }}>
      <Grid container spacing={0} rowSpacing={1} padding={10}>
        <Grid item xs={0} sm={1} md={1}></Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Item sx={{ boxShadow: 0, bgcolor: "inherit" }}>
            <Typography variant="h6" color="textPrimary" textAlign="left">
              About Us
            </Typography>
            <Typography variant="h6" color="textPrimary" textAlign="left">
              Impressum
            </Typography>
            <Typography variant="h6" color="textPrimary" textAlign="left">
              Datenschutz
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              onClick={preventDefault}
            >
              {/* <Link href="#" underline="none" color="inherit">
                Lorem
              </Link> */}
              
            </Box>
          </Item>
                   
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Item sx={{ boxShadow: 0, bgcolor: "inherit" }}>
            <Typography variant="h6" color="textPrimary" textAlign="left">
              Services
            </Typography>
            <Typography variant="h6" color="textPrimary" textAlign="left">
              Contact US
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              onClick={preventDefault}
            >
              {/* <Link href="#" underline="none" color="inherit">
                Lorem
              </Link> */}
              
            </Box>
          </Item>
        </Grid>
        
        <Grid item xs={12} sm={12} md={3}>
          <Item sx={{ boxShadow: 0, bgcolor: "inherit" }}>
            <Typography variant="h6" color="textPrimary" textAlign="left">
              Social
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              onClick={preventDefault}
            >
              <Link href="#" underline="none">
                Facebook
              </Link>
              <Link href="#" underline="none">
                Instagram
              </Link>
              <Link href="#" underline="none">
                Youtube
              </Link>
              <Link href="#" underline="none">
                Twitter
              </Link>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={0} sm={1} md={1}></Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Item sx={{ boxShadow: 0, bgcolor: "#E0FFFF", padding: "2px" }}>
            Copyright 2021 by ....... . All Rights Reserved.
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
