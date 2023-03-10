import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import App from './App';
import './index.css';
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";


const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// For mobile view
const Wrapper = styled.div` 
width: 100%;
max-width: 380px;
min-height: 680px;
margin: auto;
height: 100vh;
/* height: 100svh; */ 
 
box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
border-radius: 19px;
`;



// const BoxContainer = styled.div`
//   width: 280px;
//   min-height: 680px;
//   display: flex;
//   flex-direction: column;
//   border-radius: 19px;
//   background-color: #fff;
//   box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
//   position: relative;
//   overflow: hidden;
// `;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <App />
        <GlobalStyle />
      </Wrapper>
    </BrowserRouter>
  </React.StrictMode>,
);
