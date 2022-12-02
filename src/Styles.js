import { makeStyles } from "@mui/styles";

const useStyles = makeStyles( theme =>{
    return {
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
  box: {
    flexGrow: 1,
    padding: "10px",
  },
  flexbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navbarText: {
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    flexDirection: "column",
    underline: "none",
  },
  button: {
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
  hover: {
    "&:hover": {
      background: "#D3D3D3",
    },
  },
  logoText: {
    [theme.breakpoints.down('sm')]: {
      // variant: "h5",
      fontSize: '0.4rem',
      // flexGrow: 1,
    },
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      variant: 'square',
      height: "30px", 
      width: "50px", 
      backgroundColor: "#1769aa",
    },
    [theme.breakpoints.up('sm')]: {
      variant: 'square',
      height: "30px",
      width: "100px",
      mr: 2,
      backgroundColor: "#2196f3",
    },
    [theme.breakpoints.up('md')]: {
      variant: 'square',
      height: "30px", 
      width: "50px", 
      backgroundColor: "#4dabf5",
    },
  },
  btnSignin: {
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.3rem',
        variant: "contained",
        size: "small",

    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '0.5rem',
        variant: "contained",
        size: "medium",
    },
  },
  btnSignup: {
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.3rem',
        variant: 'outlined',
        size: "small",
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '0.5rem',
      variant: "outlined",
      size: "medium",
  },
  }
}

  // box-shadow: -1px 0px 6px 3px rgba(0,0,0,0.67);
});

export default useStyles;
