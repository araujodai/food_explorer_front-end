import styled, { keyframes } from "styled-components";

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100vw;
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
  overflow-x: hidden;
  overflow-y: auto;

  > main {
    grid-area: main;
    justify-self: center;
    margin-top: 3.4rem;

    > section {
      display: grid;
      grid-template-rows: min-content auto min-content min-content;
     
      h1 {
        font: 500 3.2rem/140% "Poppins", sans-serif;
        margin-bottom: 2.7rem;
      }

      &.hide {
        display: none;
      }

      &:first-of-type {
        animation: ${slideInLeft} 0.5s forwards;
        height: 100%;

        > div > span {
          display: block;
          margin: 3.2rem 0 4.7rem 0;
          font: 500 2rem/160% "Poppins", sans-serif;
        }

        > button {
          width: 21rem;
          margin: 0 0 0 auto;
          height: auto;
        }
      }

      &:last-of-type {
        animation: ${slideInRight} 0.5s forwards;

        .orderStatus {
          text-align: center;
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
          font-size: 2rem;
          font-weight: 700;
          line-height: 160%;

          svg {
            width: 25%;
            height: auto;
            margin-bottom: 2.4rem;
          }
        }
      }
    }

    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 5%;

      > section {
        h1 {
          margin-bottom: 3.2rem;
        }

        &.hide {
          display: initial;
        }

        &:first-of-type {
          animation: none;

          > button {
            display: none;
          }
        }

        &:last-of-type > button {
          display: none;
        }
      }
    }
  }

  > footer {
    grid-area: footer;
    margin-top: 3.4rem;
  }
`;