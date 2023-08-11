import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;

    -webkit-font-smoothing: antialiased;

    ::-webkit-scrollbar {
    width: 0.8rem;
    background-color: transparent;
    opacity: 0.8;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 0.8rem;
      background-color: transparent;
      border: 1px solid lightgray;
    }

    ::-webkit-scrollbar-button {
      background-color: transparent;
    }
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background-color: transparent;
  }

  button, a {
    font: 500 1.4rem/2.4rem "Poppins", sans-serif;
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  input, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    border: none;
  }
`;