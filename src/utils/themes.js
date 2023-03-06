import { primary, typography, yellow, green, red } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryWhite: 'white',
  
  primaryColor: primary[300],
  primaryHoverColor: primary[400],
  primaryActiveColor: primary[100],
  primaryDarkColor: primary[500],


  formElementBackground: typography[100],
  textOnFormElementBackground: typography[600],

  textColorOnPrimary: typography[100],
  textColor: typography[600],
  textColorInverted: typography[100],
  
  primaryFont: primaryFont,
  disabled: typography[400],
  textOnDisabled: typography[300],
  textFieldBackground: typography[200],
  textFieldLabelColor: typography[500],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  },
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
};

export const darkTheme = {
  primaryColor: typography[100],
  primaryHoverColor: typography[200],
  primaryActiveColor: typography[300],
  formElementBackground: primary[100],
  textOnFormElementBackground: typography[100],
  textColorOnPrimary: primary[300],
  textColor: primary[300],
  textColorInverted: typography[100],
  primaryFont: primaryFont,
  disabled: typography[400],
  textOnDisabled: typography[300],
  textFieldBackground: typography[200],
  textFieldLabelColor: typography[100],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  }
};
