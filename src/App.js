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
import { ThemeProvider } from "@mui/material";
import customTheme from "./assets/theme/theme";
import { ja } from "date-fns/locale";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <StateContext.Provider>
        <AuthState>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />

            <Route
              path="/myprofile"
              element={
                <ProtectedRoute>
                  <Tprofile />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthState>
      </StateContext.Provider>
    </ThemeProvider>
  );
}

export default App;
