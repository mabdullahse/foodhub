

import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
  fill: ${props => props.theme.primaryColor};  
  `;
// stroke: green; 

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <path d="M5.09229 4.97754L13.4773 13.3625" stroke="#FF3600" strokeLinecap="round" />
    <path d="M5.09375 13.3628L13.4787 4.97779" stroke="#FF3600" strokeLinecap="round" />
  </CloseIconWrapper>
);

