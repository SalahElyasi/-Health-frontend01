import React from "react";
import { StateContext } from "./context/Context";
import { Routes, Route } from "react-router-dom";
import AuthState from "./context/AuthContext";
import "./App.css";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Tprofile from "./components/Tprofile";
import UserViewProfile from "./components/UserViewProfile";
import { ThemeProvider } from "@mui/material";
import customTheme from "./assets/theme/theme";
import BreakPoints from "./assets/theme/breakPoints";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <BreakPoints>
    <ThemeProvider theme={customTheme}>
      <AuthState>
        <StateContext.Provider value={null}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/UserViewProfile" element={<UserViewProfile />} />

            <Route
              exact
              path="/therapeutprofile"
              element={
                <ProtectedRoute>
                  <Tprofile />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/userprofile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StateContext.Provider>
      </AuthState>
    </ThemeProvider>
    </BreakPoints>
  );
}

export default App;
