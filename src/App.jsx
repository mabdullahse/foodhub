import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, Outlet, useNavigate } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle, defaultTheme, darkTheme } from "./utils";
import { EmailInput, PasswordInput } from './components';

import { CartIcon, CloseIcon, BackIcon, DecrementIcon, IncrementIcon, FilterIcon, StarIcon, HeartIcon, GoogleIcon, FacebookIcon, LogoutIcon } from "./assets";
import { PrimaryButton, SocialButton, ButtonIcon } from "./components";

import { Routes, Route } from "react-router-dom";


import Layout from "./pages/layout/Layout";
import RequireAuth from './auth/RequireAuth';
import AuthProvider from "./auth/AuthProvider";
import LoginPage from './pages/Login1';
import Sample from "./Sample";
import Splash from './pages/Splash';
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Sidebar from "./pages/Sidebar";
import Testing from './pages/Testing';
import FoodDetails from "./pages/FoodDetails";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Rating from "./pages/Rating";
import Reviews from "./pages/Reviews";



function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <AuthProvider>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} /> 
          <Route path="/rating" element={<Rating />} />
          <Route path="/reviews/:id" element={<Reviews />} />
          
          
          <Route path="/foodDetails/:id" element={<FoodDetails />} /> 
          <Route path="/testing" element={<Testing />} />


          <Route element={<Layout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>
              }
            />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}





