import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 auto;

  > img {
    width: 2.5rem;
    height: 2.5rem;
  }

  > h1 {
    font-size: 2.1rem;
  }

  > span {
    font: 400 1.2rem "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  &:hover {
    cursor: pointer;
  }

  &.bigSize {
    /* margin-top: 3rem; */

    h1 {
      font-size: 3.7rem;
    }

    img {
      width: 4.3rem;
      height: 4.3rem;
    }
  }
`;