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
    padding: 1.6rem 3rem;

    .dishManager {
      display: flex;
      gap: 1.6rem;
      align-items: center;

      @media(min-width: 514px) {
        width: 70%;
        align-self: center;
        margin-top: 2.4rem;
      }

      @media(min-width: 1024px) {
        max-width: 30rem;
        align-self: initial;
        gap: 3rem;

        > button > svg {
          display: none;
        }
      }
    }
  }

  > footer {
    grid-area: footer;
    margin-top: 5rem;
  }
`;

export const DishWrapper = styled.div`
  width: 100%;
  margin-top: 1.6rem;
  text-align: center;

  > img {
      max-width: 26.4rem;
      max-height: 26.4rem;
      object-fit: cover;
      margin-bottom: 1.6rem;
      border-radius: 50%;
  }

  @media(min-width: 1024px) {
    display: flex;
    align-items: center;
    margin-top: 4.2rem;
    gap: 4rem;

    text-align: left;

    > img {
      margin: 0;
      max-width: 39rem;
      max-height: 39rem;
    }
  }
`;

export const DishInfo = styled.div`
  width: min(100%, 68.7rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 2.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: "Poppins", sans-serif;

  > h2 {
    font-size: clamp(2.7rem, 2.7rem + 2vw, 4rem);
    font-weight: 500;
    line-height: 140%;
  }

  > p {
    font-size: clamp(1.6rem, 1.6rem + 2vw, 2.4rem);
    font-weight: 400;
    line-height: 140%;
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

  @media(min-width: 1024px) {
    justify-content: initial;
    gap: 2rem;
  }
`;