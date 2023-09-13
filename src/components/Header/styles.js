import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 2.4rem 2.8rem;

  > nav {
    display: flex;
    align-items: center;

    margin-top: 3.2rem;

    button {
      display: flex;
    }
  }

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Cart = styled.div`
  position: relative;

  > span {
    background-color: red;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top: -2px;
    right: -3px;

    font-size: 1.4rem;
    line-height: 2.4rem
  }
`;