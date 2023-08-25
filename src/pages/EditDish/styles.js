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
  overflow: overlay;

  display: grid;
  grid-template-rows: auto min-content;
  grid-template-areas: 
  "main"
  "footer";

  > main {
    grid-area: main;
    padding: 1rem 2.2rem;
    width: 100%;
  }

  > footer {
    grid-area: footer;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-bottom: 5.3rem;

  .buttons {
    display: flex;
    gap: 1rem;
  }
`;

export const IngredientGroup = styled.div`
  > strong {
    font: 400 1.6rem/100% "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > div.ingredientsTags {
    margin-top: 8px;
    padding: 4px 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 8px;

    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
  }
`;