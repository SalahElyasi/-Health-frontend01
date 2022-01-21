import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SettingProfile from "./SettingProfile";
import PostMaker from "./PostMaker";
import useStyles from "../Styles";

import { Link } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  styled,
  alpha,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import {
  Settings,
  AddBox,
  Home,
  Logout,
  ArrowDropDown,
  ArrowDropDownCircle,
} from "@mui/icons-material";
//-------------------------------------------------------------------
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

//--------------------------------------------------------Main Function
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //-----------------------------
  const classes = useStyles();
  const [setting, setSetting] = useState(false);
  const [postForm, setPostForm] = useState(false);
  const { isAuthenticated, logout, setError } = useContext(AuthContext);
  const {
    user: { email, name, account_type, image },
  } = useContext(AuthContext);
  //------------------------------------------Function

  const toggleSetting = () => {
    setSetting(!setting);
    setPostForm(false);
    handleClose();
  };
  const togglePost = () => {
    setPostForm(!postForm);
    setSetting(false);
  };

  //-------------------------
  const downMenu = (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <ArrowDropDownCircle />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={toggleSetting} disableRipple>
          <Settings />
          Settings & privacy
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem component={Link} to="/home" onClick={logout} disableRipple>
          <Logout />
          logout
        </MenuItem>
      </StyledMenu>
    </div>
  );

  let AuthButton;
  if (!isAuthenticated) {
    setError(null);
    AuthButton = (
      <div>
        <Button
          component={Link}
          to="/signin"
          color="inherit"
          variant="contained"
        >
          Signin
        </Button>

        <Button
          component={Link}
          to="/signup"
          sx={{ ml: 2, mr: 2 }}
          color="inherit"
          variant="contained"
        >
          Signup
        </Button>
      </div>
    );
  } else {
    if (isAuthenticated && account_type === "therapeut") {
      AuthButton = (
        <>
          <Box className={classes.navbarText}>
            <Typography to="/therapeutprofile" variant="caption">
              {name}
            </Typography>
            <Typography
              component={Link}
              to="/therapeutprofile"
              sx={{ fontSize: 8, mt: 0 }}
              variant="caption"
            >
              {email}
            </Typography>
          </Box>
          <Link to="/therapeutprofile">
            <Avatar sx={{ ml: 2, mr: 2 }} alt="Travis Howard" src={image} />
          </Link>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
          >
            <AddBox onClick={() => togglePost()} />
          </IconButton>
          {downMenu}
        </>
      );
    } else if (isAuthenticated && account_type === "user") {
      AuthButton = (
        <>
          <Box className={classes.navbarText}>
            <Typography to="/userprofile" variant="caption">
              {name}
            </Typography>
            <Typography
              component={Link}
              to="/userprofile"
              sx={{ fontSize: 8, mt: 0 }}
              variant="caption"
            >
              {email}
            </Typography>
          </Box>

          <Link to="/userprofile">
            <Avatar sx={{ ml: 2, mr: 2 }} alt="Travis Howard" src={image} />
          </Link>
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <ArrowDropDownCircle />
            </IconButton>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={toggleSetting} disableRipple>
                <Settings />
                Settings & privacy
              </MenuItem>

              <Divider sx={{ my: 0.5 }} />

              <MenuItem
                component={Link}
                to="/home"
                onClick={logout}
                disableRipple
              >
                <Logout />
                logout
              </MenuItem>
            </StyledMenu>
          </div>
        </>
      );
    }
  }

  //------------------------------------------return
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Avatar
              component={Link}
              to="/home"
              sx={{ height: "50px", width: "100px", mr: 2 }}
              variant="square"
              alt="logo"
            >
              Logo
            </Avatar>
            <Link to="/home">
              <Home />
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Health
            </Typography>
            {AuthButton}

            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton> */}
          </Toolbar>
        </AppBar>
        {setting && <SettingProfile />}
        {postForm && <PostMaker />}
      </Box>
    </>
  );
};

export default Navbar;
