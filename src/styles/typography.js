import { css } from 'styled-components';

export const typography = {
  h1: css`
    font-family: 'Google Sans', Arial, sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.1;
    color: #202124;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  `,
  h2: css`
    font-family: 'Google Sans', Arial, sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.2;
    color: #202124;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  `,
  h3: css`
    font-family: 'Google Sans', Arial, sans-serif;
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.3;
    color: #202124;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  `,
  body1: css`
    font-family: Roboto, Arial, sans-serif;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #5f6368;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  `,
  body2: css`
    font-family: Roboto, Arial, sans-serif;
    font-size: 0.95rem;
    line-height: 1.5;
    color: #5f6368;

    @media (max-width: 480px) {
      font-size: 0.875rem;
    }
  `,
  button: css`
    font-family: 'Google Sans', Arial, sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: none;
    letter-spacing: 0.25px;
  `,
  caption: css`
    font-family: Roboto, Arial, sans-serif;
    font-size: 0.8rem;
    line-height: 1.5;
    color: #5f6368;
  `
};
