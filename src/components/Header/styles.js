import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 2.4rem 2.8rem;

  > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 3.2rem;

    .mobileOrderButton {
      position: relative;

      > span {
        position: absolute;
        top: -2px;
        right: -3px;

        background: ${({ theme }) => theme.COLORS.TOMATO_100};
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        font-size: 1.4rem;
        line-height: 2.4rem
      }
    }

    @media(min-width: 1024px) {
      margin: 0;
      
      .mobileOrderButton {
        display: none;
      }
    }
  }
`;

export const DesktopMenu = styled.div`
  display: none;

  @media(min-width: 1024px) {
    display: flex;
    align-items: center;
    flex: content;
    gap: 3.2rem;
    margin-left: 3.2rem;

    > button:nth-child(2) {
      max-width: 21.6rem;
    }
  }
`;