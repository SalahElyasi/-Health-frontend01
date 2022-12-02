import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#fafafa",
      dark: "#c7c7c7",
      contrastText: "#000",
    },
    secondary: {
      light: "#ffffff",
      main: "#ffcdd2",
      dark: "#cb9ca1",
      contrastText: "#000",
    },
    
  },
});

export default customTheme;
