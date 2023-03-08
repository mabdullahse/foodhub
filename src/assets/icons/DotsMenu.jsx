

import React from "react";
import styled from "styled-components";

const Wrapper = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;  
  `;
// stroke: green; 

export const DotsMenu = ({ color = "#FE724C" }) => (
  <Wrapper aria-hidden="true" width="4" height="12" viewBox="0 0 4 12" >
    <ellipse cx="2.01211" cy="2" rx="1.98769" ry="2" fill="#C4C4C4" />
    <ellipse cx="2.01211" cy="10" rx="1.98769" ry="2" fill="#C4C4C4" />
  </Wrapper>
);


