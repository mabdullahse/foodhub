import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle, defaultTheme, darkTheme } from "../../utils";
import { AuthContext } from "../../auth/AuthProvider";
 

function AuthStatus() {
    let auth = React.useContext(AuthContext);
    let navigate = useNavigate();

    if (!auth?.user) {
        return <p>You are not logged in.</p>;
    }

    return (
        <p>
            Welcome {auth.user}!{" "}
            <button
                onClick={() => {
                    auth.signout(() => navigate("/"));
                }}
            >
                Sign out
            </button>
        </p>
    );
}

function Layout() {
   
    return (


     
            <div>
                <AuthStatus />

                <ul>
                    <li>
                        <Link to="/">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>



                <Outlet />


                <GlobalStyle />
            </div>

 
    );
}

export default Layout; 