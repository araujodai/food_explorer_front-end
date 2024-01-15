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
  width: 100%;
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
  overflow: overlay;

  > main {
    grid-area: main;
    padding: 3.4rem 2rem;

    .orderDetails {
      position: static;
      animation: ${slideInLeft} 0.5s forwards;

      h1 {
        font: 500 3.2rem/140% "Poppins", sans-serif;
        margin-bottom: 2.7rem;
      }

      > span {
        display: block;
        margin: 3.2rem 0 4.7rem 0;
        font: 500 2rem/160% "Poppins", sans-serif;
      }

      > button:last-child {
        width: 21rem;
        margin: 0 0 0 auto;
      }

      &.hide {
        display: none;
      }
    }

    .paymentWrapper {
      display: none;

      &.show {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        animation: ${slideInRight} 0.5s forwards;

        .qrcode {
          text-align: center;
          padding-block: 3.1rem;

          img {
            /* height: 179.8px;
            width: 179.8px; */
            width: clamp(179px, 100%, 250px);
            height: auto;
            object-fit: cover;
          }
        }

      }
    }

    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 5%;

      .orderDetails {
        h1 {
          display: block;
          margin-bottom: 3.2rem;
        }
      }

      .paymentWrapper {
        display: initial;

        > button:first-of-type {
          display: none;
        }

        .qrcode {
          padding-block: 4.7rem;
          text-align: center;
          
          /* padding: clamp(20px, 5vw, 50px) clamp(35px, 10vw, 50px); */

          img {
            width: 250px;
            height: 250px;
          }
        }
      }
    }
  }

  > footer {
    grid-area: footer;
  }
`;

export const Form = styled.form`
  padding: 5.7rem 2.6rem;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 3.2rem;
  grid-column-gap: 1.7rem;

  div:first-child {
    grid-row: 1;
    grid-column: 1 / span 2;
  }

  .finalize {
    grid-row: 3;
    grid-column: 1 / span 2;
  }
`;