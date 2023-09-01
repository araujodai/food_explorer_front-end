import styled from "styled-components";

export const Container = styled.div`

  > .openMenu {
    display: flex;
  }
`;

export const NavWrapper = styled.div`
  padding: 3.6rem 2.8rem 1.2rem;

  > ul {
    list-style: none;
    margin-top: 3.6rem;

    li {
      padding: 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 300;
      line-height: 140%; /* 33.6px */
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    li:last-child {
      border: none;
    }
  }
`;

export const Mobile = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  display: grid;
  grid-template-rows: min-content auto min-content;

  background: ${({ theme }) => theme.COLORS.DARK_400};

  > header {
    background: ${({ theme }) => theme.COLORS.DARK_700};

    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 5.6rem 2.8rem 2.4rem;

    h1 {
    color: var(--light-light-100, #FFF);
    font-family: Roboto;
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }
  }

`;
