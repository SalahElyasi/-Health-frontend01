import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SettingProfile from "./SettingProfile";
import PostMaker from "./PostMaker";

import { Link } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { Menu, Settings, AddBox, Home } from "@mui/icons-material";
//--------------------------------------------------------Main Function
const Navbar = () => {
  const [setting, setSetting] = useState(false);
  const [postForm, setPostForm] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const {
    user: { _id, email, name },
  } = useContext(AuthContext);
  //------------------------------------------Function

  const toggleSetting = () => {
    setSetting(!setting);
    setPostForm(false);
  };
  const togglePost = () => {
    setPostForm(!postForm);
    setSetting(false);
  };
  //------------------------------------------return
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/home">
              <Avatar
                sx={{ height: "50px", width: "100px", mr: 2 }}
                variant="square"
                alt="logo"
              >
                Logo
              </Avatar>
            </Link>
            <Link to="/home">
              <Home />
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Health
            </Typography>
            {!isAuthenticated ? (
              <div>
                <Link to="/signin">
                  <Button color="inherit" variant="contained">
                    Signin
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    sx={{ ml: 2, mr: 2 }}
                    color="inherit"
                    variant="contained"
                  >
                    Signup
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/myprofile">
                  <Typography variant="caption" display="block" gutterBottom>
                    {name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 8 }}
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    {email}
                  </Typography>
                </Link>
                <Link to="/myprofile">
                  <Avatar
                    sx={{ ml: 2, mr: 2 }}
                    alt="Travis Howard"
                    src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  />
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
                <Link to="/home">
                  <Button
                    sx={{ ml: 2, mr: 2 }}
                    color="inherit"
                    variant="contained"
                    onClick={logout}
                  >
                    logout
                  </Button>
                </Link>
              </>
            )}

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Settings onClick={() => toggleSetting()} />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
        {setting && <SettingProfile />}
        {postForm && <PostMaker />}
      </Box>
    </>
  );
};

export default Navbar;
