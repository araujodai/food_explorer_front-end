import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* width: 100vw; */
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
    padding: 3.4rem 2rem;

    h1 {
      margin-bottom: 2.9rem;
    }

    @media(min-width: 1024px) {
      h1 {
        margin-bottom: 3.2rem;
      }

      > .favoritesWrapper {
        display: grid;
        /* grid-template-columns: 1fr 1fr 1fr 1fr; */
        grid-template-columns: repeat(4, 25%);
        grid-row-gap: 3.2rem;
        /* grid-column-gap: 2rem; */
      }
    }
  }

  > footer {
    grid-area: footer;
  }
`;