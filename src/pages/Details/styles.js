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
  overflow: overlay;

  display: grid;
  grid-template-rows: auto min-content;
  grid-template-areas: 
  "main"
  "footer";

  > main {
    grid-area: main;
    padding: 1.6rem 4.6rem;
    width: 100%;
  }

  > footer {
    grid-area: footer;
    margin-top: 5rem;
  }
`;

export const DishWrapper = styled.div`
  width: 100%;
  margin-top: 1.6rem;

  > img {
      width: 100%;
      height: 26.4rem;
      object-fit: cover;
      margin-bottom: 1.6rem;
  }
`;

export const DishInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: "Poppins", sans-serif;
  line-height: 140%;

  > h2 {
    font-size: 2.7rem;
    font-weight: 500;
  }

  > p {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

export const IngredientsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;

  > span {
    padding: 4px 8px;
    border-radius: 5px;
    display: inline-flex;
    max-width: 100%;

    background: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font: 500 1.4rem/2.4rem "Poppins", sans-serif;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const DishManager = styled.div`
  display: flex;
  gap: 1.6rem;

  > div {
    display: flex; 
    gap: 1.5rem;
    align-items: center;

    span {
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 160%;
    }
  }

  > button {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;