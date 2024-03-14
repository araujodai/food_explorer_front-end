import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    ::-webkit-scrollbar-thumb {
    border-radius: 0.8rem;
    background: transparent;
    border: 1px solid red;
  }
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    overflow: hidden;

    -webkit-font-smoothing: antialiased;

    @media (min-width: 1024px) {
      ::-webkit-scrollbar {
        width: 0.5rem;
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
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
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

  .contentMaxWidthWrapper {
    width: min(100%, 1120px);
    margin: 0 auto;

    @media (min-width: 720px) {
      padding-inline: 3rem;
    }

    @media (min-width: 998px) {
      padding-inline: 4rem;
    }

    @media (min-width: 1180px) {
      padding-inline: 0;
    }
  }
`;