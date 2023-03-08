import React from "react";
import styled from "styled-components";
import { typeScale, primaryFont, typography } from "../utils";

export const Input = styled.input`
  
  height: 52px; 
  border: 1px solid ${typography[200]};
  padding-left: ${props => props.hasIcon ? '3.3rem' : '8px'};
  font-family: ${primaryFont};
  border-radius: 10px;
  color: ${props => props.theme.textOnFormElementBackground};
  font-weight: bold;
  transition: all 300 ease-out 0s;

  &:focus-visible { 
    outline: transparent;
    border: 1px solid ${props => props.theme.primaryColor};
  }
`;

export const Label = styled.label`
  color: ${props => props.theme.textFieldLabelColor};
  font-size: ${typeScale.helperText};
  margin-bottom: 8px;
`;

export const EmailInput = ({ label, placeholder, value="" }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
    <Label htmlFor="email">{label}</Label>
    <Input id="email" type="email" placeholder={placeholder} value={value} />
  </div>
);

export const PasswordInput = ({ label, value="", placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
    <Label htmlFor="password">{label}</Label>
    <Input id="password" type="password" placeholder={placeholder}  value={value}/>
  </div>
);

export const PhoneInput = ({ label, value="", placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
    <Label htmlFor="phone">{label}</Label>
    <Input id="phone" type="number" placeholder={placeholder}  value={value}/>
  </div>
);


export const TextInput = ({ label, value="", placeholder, className, icon }) => (
  <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }} className={className + " " + "position-relative "}>
    <Label htmlFor="text1">{label}</Label>
    <Input id="text1" type="text" placeholder={placeholder} hasIcon={!!icon}  value={value}/>
    {icon && <img src={icon} className="input-img" />}
  </div>
);


