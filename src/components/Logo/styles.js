import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 auto;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    img {
      width: 2.5rem;
      height: 2.5rem;
    }

    h1 {
      font-size: 2.1rem;
    }
  }

  > span {
    font: 400 1.2rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  &:hover {
    cursor: pointer;
  }

  &.bigSize {
    h1 {
      font-size: 3.7rem;
    }

    img {
      width: 4.3rem;
      height: 4.3rem;
    }
  }

  @media(min-width: 1024px) {
    flex-direction: column;

    > div {
      > img {
        width: 3rem;
        height: 3rem;
      }

      > h1 {
        font-size: 2.4rem;
      }
    }

    > span {
      align-self: end;
      margin-top: -10px;
    }

    &.bigSize {
      h1 {
        font-size: 4.2rem;
      }

      img {
        width: 4.9rem;
        height: 4.7rem;
      }
    }
  }
`;