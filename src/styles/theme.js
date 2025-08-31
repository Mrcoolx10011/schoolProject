import { typography } from './typography';
import { spacing } from './spacing';

const lightColors = {
  primary: '#1a73e8',
  secondary: '#5f6368',
  text: '#202124',
  background: '#ffffff',
  surface: '#f8f9fa',
  error: '#d93025',
  success: '#1e8e3e',
  border: '#dadce0',
  cardBackground: '#fff',
  cardShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
  hoverBackground: '#e8f0fe',
  hoverColor: '#1a73e8',
  buttonBackground: '#f8f9fa',
  buttonHoverBackground: '#f8f9fa',
  buttonBorder: '#f8f9fa',
  buttonHoverBorder: '#dadce0',
  buttonColor: '#3c4043',
  buttonHoverColor: '#202124',
};

const darkColors = {
  primary: '#8ab4f8',
  secondary: '#bdc1c6',
  text: '#e8eaed',
  background: '#202124',
  surface: '#303134',
  error: '#f28b82',
  success: '#81c995',
  border: '#5f6368',
  cardBackground: '#303134',
  cardShadow: '0 1px 2px 0 rgba(0,0,0,0.5), 0 1px 3px 1px rgba(0,0,0,0.3)',
  hoverBackground: '#424549',
  hoverColor: '#8ab4f8',
  buttonBackground: '#3c4043',
  buttonHoverBackground: '#424549',
  buttonBorder: '#3c4043',
  buttonHoverBorder: '#5f6368',
  buttonColor: '#e8eaed',
  buttonHoverColor: '#e8eaed',
};

const theme = {
  light: {
    colors: lightColors,
    typography,
    spacing,
    breakpoints: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1024px',
    },
    elevation: {
      1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    }
  },
  dark: {
    colors: darkColors,
    typography,
    spacing,
    breakpoints: {
      mobile: '320px',
      tablet: '768px',
      desktop: '1024px',
    },
    elevation: {
      1: '0 1px 3px rgba(0,0,0,0.20), 0 1px 2px rgba(0,0,0,0.30)',
      2: '0 3px 6px rgba(0,0,0,0.25), 0 3px 6px rgba(0,0,0,0.35)',
      3: '0 10px 20px rgba(0,0,0,0.22), 0 6px 6px rgba(0,0,0,0.32)'
    }
  }
};

export default theme;