import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
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

  // box-shadow: -1px 0px 6px 3px rgba(0,0,0,0.67);
});

export default useStyles;
