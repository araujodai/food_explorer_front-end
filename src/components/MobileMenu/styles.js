import styled from "styled-components";

export const Container = styled.div`
  > .menu {
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
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font: 400 2.1rem "Roboto", sans-serif;
      }
    }
  }

  @media(min-width: 1024px) {
    display: none;
  }
`;

export const NavWrapper = styled.div`
  padding: 3.6rem 2.8rem 1.2rem;

  > ul {
    margin-top: 3.6rem;

    li {
      padding: 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

      a {
        font: 300 2.4rem/140% "Poppins", sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }

    li:last-child {
      border: none;
    }
  }
`;
