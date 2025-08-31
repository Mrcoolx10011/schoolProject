import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px; /* Base font size */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    html {
      font-size: 14px; /* Smaller font size for tablets and mobiles */
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    html {
      font-size: 12px; /* Even smaller font size for small mobile devices */
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    ${({ isOpen }) => isOpen && 'overflow: hidden;'}
    /* Subtle background pattern for visual depth */
    background-image: radial-gradient(#e0e0e0 0.5px, transparent 0.5px);
    background-size: 10px 10px;
    background-attachment: fixed;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;