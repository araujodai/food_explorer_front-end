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

export const Container = styled.div`
  padding: 4rem 2rem;
  min-height: 100vh;

  display: grid;
  align-content: center;


  @media(min-width: 1024px) {
    grid-template-columns: auto auto;
    padding-inline: 0;
  }
`;

export const Form = styled.form`
  margin-top: 7.3rem;
  text-align: center;
  animation: ${slideInRight} 0.5s forwards;

  > h2 {
    display: none;
  }

  > div, button {
    margin-bottom: 3.2rem;
  }

  > :last-child {
    margin: 0 auto;
  }

  @media(min-width: 512px) {
    min-width: 47.6rem;
    padding: 4rem;
    justify-self: center;
  }

  @media(min-width: 768px) {
    background: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;
    padding: 6.4rem;
    border-radius: 1.6rem;

    > h2 {
      display: initial;
      font: 500 3.2rem/140% "Poppins", sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      + div {
        margin-top: 3.2rem;
      }
    }
  }

  @media(min-width: 1024px) {
    max-width: 47.6rem;
    margin: 0;
  }
`;