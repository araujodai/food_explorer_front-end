import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto auto 1fr;

  align-items: center;
  grid-column-gap: 1rem;
  padding-block: 1.6rem;

  > img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    grid-row: 1 / span 2;
    grid-column: 1;
  }

  > span {
    grid-row: 1;
    grid-column: 2;

    font: 500 2rem/160% "Poppins", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    align-self: end;
  }

  > p {
    grid-row: 1;
    grid-column: 3;

    font-size: 1.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-weight: 400;
    line-height: 190%;

    white-space: nowrap;
    align-self: end;
  }

  > button {
    grid-row: 2;
    grid-column: 2;

    color: ${({ theme }) => theme.COLORS.TOMATO_400};
    max-width: min-content;
    align-self: start;
  }

  &.readOnly {
    > img {
      grid-row: 1;
    }

    > span , p {
      align-self: center;
    }
  }

  //teste
  /* &:hover {
    border: 1px solid green;
  } */
`;
