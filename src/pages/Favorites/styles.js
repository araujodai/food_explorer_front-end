import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: min-content auto;
  grid-template-areas: 
  "header"
  "ContentWrapper";
  overflow: hidden;

  > header {
    grid-area: header;
  }  
`;

export const ContentWrapper = styled.div`
  grid-area: ContentWrapper;
  display: grid;
  grid-template-rows: auto min-content;                                          
  grid-template-areas: 
  "main"
  "footer";
  overflow: overlay;

  > main {
    grid-area: main;
    justify-self: center;
    margin-block: 3.4rem;

    h1 {
      font: 500 3.2rem/140% "Poppins", sans-serif;
    }

    .noContent {
      position: relative;
      left: 0;
      top: 50%;
      transform: translateY(-60%);
    }

    .favoritesWrapper {
      margin-top: 2.9rem;
    }

    @media(min-width: 1024px) {
      > .favoritesWrapper {
        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-row-gap: 3.2rem;
        margin-top: 3.2rem;
      }
    }
  }

  > footer {
    grid-area: footer;
  }
`;