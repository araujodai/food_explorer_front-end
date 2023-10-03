import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: min-content auto;
  grid-template-areas:
  "header"
  "contentWrapper";
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  grid-area: contentWrapper;
  width: 100%;
  
  display: grid;
  grid-template-rows: auto min-content;
  grid-template-areas: 
  "main"
  "footer";
  overflow-x: overlay;

  > main {
    grid-area: main;
    
    @media (max-width: 1024px) {
      padding: 1rem 2.8rem;
    }

    @media(min-width: 1024px) {
      > button {
        margin-top: 4rem;
        font-size: 2.4rem;

        svg {
          width: 3.2rem;
          height: 3.2rem;
        }
      }
    }
  }

  > footer {
    grid-area: footer;
  }
`;

export const Form = styled.form`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-bottom: 5.3rem;

  > h1 {
    font: 500 3.2rem/140% "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media(min-width: 1024px) {
    gap: 3.2rem;

    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 0.6fr 1fr 0.3fr 0.5fr;

  > h1 {
    grid-row: 1;
    grid-column: 1 / span 4;
  }

  > :nth-child(2) {
    grid-row: 2;
    grid-column: 1;
  }

  > :nth-child(4) {
    grid-row: 2;
    grid-column: 3 / span 2;

  }

  > :nth-child(5) {
    grid-row: 3;
    grid-column: 1 / span 3;
  }

  > :nth-child(7) {
    grid-row: 4;
    grid-column: 1 / span 4;
  }

  > button {
    grid-row: 5;
    grid-column: 4;
    max-width: 17.2rem;
    justify-self: end;
  }
}
`;

export const IngredientGroup = styled.div`  
  > strong {
    font: 400 1.6rem/100% "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > .tagsWrapper {
    margin-top: 1.6rem;
    padding: 4px 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 8px;

    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
  }
`;