import React from "react";
import useStyles from "../Styles";

//-----------------------MUI
import { styled, Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// import { Search } from "@mui/icons-material";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#000000",
  },
  "& .MuiInput-underline:after": {},
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#2a2b2b",
      borderRadius: 19,
      mt: 12,
      height: 40,
    },
    "&:hover fieldset": {
      borderColor: "#000000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000",
    },
  },
});

const SearchBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.flexbox}>
      <CssTextField label="Search..." id="custom-css-outlined-input" />
    </Box>
  );
};

export default SearchBar;
