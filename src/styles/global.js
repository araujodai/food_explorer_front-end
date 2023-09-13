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

    /* ::-webkit-scrollbar {
      width: 0.8rem;
      background: transparent;
      opacity: 0.8;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 0.8rem;
      background: transparent;
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    }

    ::-webkit-scrollbar-button {
      background-color: transparent;
    } */

  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background-color: transparent;
  }

  button, a {
    font-family: "Poppins", sans-serif;
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
    outline: none;
  }

  ul {
    list-style: none;
  }
`;